import { useState, useEffect, useRef } from "react";

const useTimer = (startTimeInSeconds, endTimeInSeconds = -1) => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const startTimeRef = useRef(startTimeInSeconds);

  useEffect(() => {
    startTimeRef.current = startTimeInSeconds;
    if (endTimeInSeconds !== -1 && startTimeRef.current >= endTimeInSeconds) {
      startTimeRef.current = endTimeInSeconds;
    }

    let initialHours = Math.floor(startTimeRef.current / 3600);
    let initialMinutes = Math.floor((startTimeRef.current % 3600) / 60);
    let initialSeconds = startTimeRef.current % 60;

    setTime({
      hours: initialHours,
      minutes: initialMinutes,
      seconds: initialSeconds,
    });

    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds + 1;

        if (newSeconds === 60) {
          const newMinutes = prevTime.minutes + 1;
          return { hours: prevTime.hours, minutes: newMinutes, seconds: 0 };
        }

        if (prevTime.minutes === 60) {
          const newHours = prevTime.hours + 1;
          return { hours: newHours, minutes: 0, seconds: newSeconds };
        }

        if (
          endTimeInSeconds !== -1 &&
          prevTime.hours * 3600 + prevTime.minutes * 60 + newSeconds >
            endTimeInSeconds
        ) {
          clearInterval(interval);
          return prevTime;
        }

        return { ...prevTime, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [startTimeInSeconds, endTimeInSeconds]);

  return time;
};

export default useTimer;
