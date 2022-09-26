import React, { useState } from "react";
import RightAsideDetail from "../components/RightAsideDetail";
//import LeftAsideDetail from "../components/LeftAsideDetail";
import { useParams } from "react-router-dom";
import LikeToggle from "../components/LikeToggle/LikeToggle";
import useFetchLike from "../hooks/useFetchLike";
import PostDetailCard from "../components/PostDetailCard/PostDetailCard";

const PostDetail = () => {
  const params = useParams();

  //comento para pasarlo al toogle
  const url = `https://devto-challenge-backend.vercel.app/likes/${params.postId}`;
  const postUrl = `https://devto-challenge-backend.vercel.app/posts/${params.postId}`;
  const { data, loading, error } = useFetchLike(url);
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
      <PostDetailCard></PostDetailCard>
    </div>
  );
};

export default PostDetail;
