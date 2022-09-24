import { useEffect, useState, setStatus } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useDelete = async (postURL, token) => {
  const navigate = useNavigate();
  console.log("ejecutando delete");
  console.log("Delete en camino");
  const response = await fetch(postURL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const jsonData = await response.json();

  // No fue exitoso, no estas autorizado
  if (!jsonData.success) {
    alert(jsonData.error);
  } else {
    // Navegar
    alert("Post Succesfully Deleted");
    navigate("/index");
  }
};

export default useDelete;
