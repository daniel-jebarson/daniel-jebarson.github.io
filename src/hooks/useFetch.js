import { useEffect, useState } from "react";
import Axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setisLoading(true);
    Axios.get(url)
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
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
