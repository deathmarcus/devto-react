import React, { useState, useContext } from "react";
import EditUserForm from "../components/EditUserForm/EditUserForm.js";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

const EditUserPage = () => {
  const params = useParams();
  const url = `https://devto-challenge-backend.vercel.app/users/${params.id}`;
  const { data, loading, error } = useFetch(url);
  console.log("Aqui la data:", data?.data?.user);
  if (error) console.log(error);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {data && <EditUserForm data={data} user={url} />}
    </div>
  );
};

export default EditUserPage;
