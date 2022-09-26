import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const token = localStorage.getItem("token") || "";
        const payload = token.split(".")[1];
        const userId = JSON.parse(atob(payload)).id;
        setLoading(true);
        let headers = {
          Authorization: `Bearer ${token}`,
          userId: `${userId}`,
        };
        const response = await axios.get(url, { headers });
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
