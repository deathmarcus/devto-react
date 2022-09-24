import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url, token) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.delete(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
