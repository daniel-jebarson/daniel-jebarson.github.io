import { useState, useEffect } from "react";

const useTimer = (startTimeInSeconds, endTimeInSeconds = -1) => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Convert start time to hours, minutes, and seconds
    if (endTimeInSeconds != -1 && startTimeInSeconds >= endTimeInSeconds) {
      startTimeInSeconds = endTimeInSeconds;
    }
    let initialHours = Math.floor(startTimeInSeconds / 3600);
    let initialMinutes = Math.floor((startTimeInSeconds % 3600) / 60);
    let initialSeconds = startTimeInSeconds % 60;

    // Set initial time
    setTime({
      hours: initialHours,
      minutes: initialMinutes,
      seconds: initialSeconds,
    });

    const interval = setInterval(() => {
      // Increment seconds
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds + 1;

        // Update minutes and reset seconds when it reaches 60
        if (newSeconds === 60) {
          const newMinutes = prevTime.minutes + 1;
          return { hours: prevTime.hours, minutes: newMinutes, seconds: 0 };
        }

        // Update hours and reset minutes when it reaches 60
        if (prevTime.minutes === 60) {
          const newHours = prevTime.hours + 1;
          return { hours: newHours, minutes: 0, seconds: newSeconds };
        }

        // Check if the end time is reached
        if (
          endTimeInSeconds != -1 &&
          prevTime.hours * 3600 + prevTime.minutes * 60 + newSeconds >
            endTimeInSeconds
        ) {
          clearInterval(interval);
          return prevTime;
        }

        // Keep updating seconds
        return { ...prevTime, seconds: newSeconds };
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [startTimeInSeconds, endTimeInSeconds]);

  return time;
};

export default useTimer;
