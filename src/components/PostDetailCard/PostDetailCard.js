import React, { useState, useContext, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetchLike";

function PostDetailCard(postUrl) {
  const { data, loading, error } = useFetch(postUrl);
  if (data) console.log("POSTDATA:", { data });

  return <div></div>;
}

export default PostDetailCard;
