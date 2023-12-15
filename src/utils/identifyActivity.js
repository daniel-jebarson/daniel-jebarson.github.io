const isSpotify = (data) => {
  return data.name === "Spotify";
};

const filterActivities = (inputArray) => {
  const filteredArray = inputArray.filter((obj) =>
    obj.hasOwnProperty("assets")
  );
  return filteredArray;
};
export { isSpotify, filterActivities };
