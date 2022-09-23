import React, { useState, useContext } from "react";
import EditPostForm from "../components/EditPostForm/EditPostForm.js";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

const EditPostPage = () => {
  const params = useParams();
  const url = `https://devto-challenge-backend.vercel.app/posts/${params.postId}`;
  const { data, loading, error } = useFetch(url);
  console.log("Aqui la data:", data.data.post);
  if (error) console.log(error);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {data && <div>Exito</div>}
    </div>
  );
};

export default EditPostPage;
