const getElapsedTime = (curr) => {
  const now = new Date();

  const epoch = new Date(curr);

  const difference = now - epoch;

  let seconds = difference / 1000;

  return formatTime(Math.floor(seconds));
};

const getPercentage = (data) => {
  let tot = Math.ceil((data.timestamps.end - data.timestamps.start) / 1000);
  let now = new Date();
  let curr = Math.ceil((now - data.timestamps.start) / 1000);
  let perc = Math.ceil((curr * 100) / tot);
  if (perc >= 100) return 100;
  return perc;
};

const formatTime = (seconds) => {
  if (isNaN(seconds) || seconds < 0) {
    return "Invalid time";
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${hours === 0 ? "" : hours + "h :"} ${
    minutes === 0 && hours === 0 ? "" : minutes + "m :"
  } ${remainingSeconds + "s"}`;

  return formattedTime;
};

export { getElapsedTime, formatTime, getPercentage };
