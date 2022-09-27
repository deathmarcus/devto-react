import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchPost(url) {
  const [postData, setPostData] = useState(null);
  const [postError, setPostError] = useState(null);
  const [postLoading, setPostLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const token = localStorage.getItem("token");
        let userId = "";
        if (token) {
          const payload = token.split(".")[1];
          userId = JSON.parse(atob(payload)).id;
        }
        setPostLoading(true);
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPostData(response.data);
      } catch (err) {
        setPostError(err);
      } finally {
        setPostLoading(false);
      }
    })();
  }, [url]);

  return { postData, postError, postLoading };
}
