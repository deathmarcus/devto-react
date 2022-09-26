import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function useRequest() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log("ENTRASTE A USEREQUEST");
  const params = useParams();
  //
  useEffect(() => {
    (async function () {
      try {
        const token = localStorage.getItem("token") || "";

        const payload = token.split(".")[1];
        const userId = JSON.parse(atob(payload)).id;

        const postId = params.postId;

        let body = {
          postId: postId,
          likes: userId,
        };
        setLoading(true);
        const response = await axios({
          method: "post",
          url: "https://devto-challenge-backend.vercel.app/likes",
          data: body,
          headers: {
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
  }, []);

  return { data, error, loading };
}
