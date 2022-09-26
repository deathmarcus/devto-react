import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function useUnlike() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log("ENTRASTE A UnlikeRequest");
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
          method: "delete",
          url: "https://localhost:8080/likes",
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
