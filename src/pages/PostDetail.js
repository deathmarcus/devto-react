import React, { useState } from "react";
import RightAsideDetail from "../components/RightAsideDetail";
//import LeftAsideDetail from "../components/LeftAsideDetail";
import { useParams } from "react-router-dom";
import LikeToggle from "../components/LikeToggle/LikeToggle";
import useFetch from "../hooks/useFetch";

const PostDetail = () => {
  const params = useParams();

  //comento para pasarlo al toogle
  const url = `http://localhost:8080/likes/${params.postId}`;
  const { data, loading, error } = useFetch(url);

  console.log(data?.data?.postLikeInfo?.userExistInDocument);

  return (
    <div>
      <RightAsideDetail />
      <div>
        {loading && <div>Loading...</div>}
        {data && (
          <LikeToggle
            userExistInDocument={data.data.postLikeInfo.userExistInDocument}
          />
        )}
      </div>
    </div>
  );
};

export default PostDetail;
