import { useEffect, useState, setStatus } from "react";
import axios from "axios";

// export default function useDelete(url) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async function () {
//       try {
//         const token = localStorage.getItem("token" || "");
//         const payload = token.split(".")[1];
//         const id = JSON.parse(atob(payload)).id;

//         // setLoading(true);
//         const headers = {
//           Authorization: `Bearer ${token}`,
//         };
//         const response = await axios.delete(
//           `https://devto-challenge-backend.vercel.app/posts/630d05d8e63f61c48cc49604`,
//           { headers }
//         );
//         console.log("delete:", response);
//         setData(response.data);
//       } catch (err) {
//         setError(err.message);
//         console.log(err.message);
//       } finally {
//         setLoading(false);
//       }
//     });
//   }, []);

//   return { data, error, loading };
// }
export default function useDelete(url) {
  useEffect(() => {
    const token = localStorage.getItem("token" || "");

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    // DELETE request using axios with error handling
    axios
      .delete("https://reqres.in/api/posts/1", { headers })
      .then((response) => setStatus("Delete successful"))
      .catch((error) => {
        //setErrorMessage(error.message);
        console.error("There was an error!", error);
      });
  }, []);
}
