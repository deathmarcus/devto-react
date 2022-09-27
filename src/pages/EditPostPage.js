import React, { useState, useContext } from "react";
import EditPostForm from "../components/EditPostForm/EditPostForm.js";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

const EditPostPage = () => {
  const params = useParams();

  const url = `https://devto-challenge-backend.vercel.app/posts/${params.postId}`;
  const { data, loading, error } = useFetch(url);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {data && <EditPostForm data={data} postURL={url} />}
    </div>
  );
};

export default EditPostPage;
