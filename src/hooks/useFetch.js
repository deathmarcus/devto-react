// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const PostFetch = () => {
//   const [post, setPost] = useState({});
//   const [error, setError] = useState(false);
//   const params = useParams();
//   const url = `https://devto-challenge-backend.vercel.app/posts/${params.postId}`;

//   const fetchData = () => {
//     console.log("Ejecutando post fetch");
//     fetch(url)
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setPost(data.data.post);
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

//   useEffect(() => {
//     fetchData(url);
//   }, {});

//   if (!post) {
//     return <div>Cargando..</div>;
//   }
//   return post;
// };

// export default PostFetch;

import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
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
