import { useEffect, useState } from "react";
import Axios from "axios";
import { filterActivities } from "../utils/identifyActivity";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setisLoading(true);
    Axios.get(url)
      .then((response) => {
        let tempData = response.data.data;
        if (tempData.hasOwnProperty("activities")) {
          tempData["activities"] = filterActivities(tempData.activities);
        }
        setData(tempData);

        // console.log(response.data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
