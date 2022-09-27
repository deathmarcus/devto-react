import React, { useState, useContext, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetchLike";

function PostDetailCard({ postData }) {
  let { postAuthor, postBody, postImage, postTitle } = postData.data.post;
  let postId = postData.data.post._id;

  return (
    <div className="card ">
      <img src={postImage} className="img-top " alt="POSTIMAGE" />
      <div
        className="link-dev d-flex flex-row px-5 py-2"
        id="post_author_holder"
      >
        <div className="flex position-relative image-title">
          <a href="https://dev.to/devteam">
            <img
              id="image-dev"
              src=""
              className="radius-default align-middle"
              width="40"
              height="40"
              alt=""
            />
          </a>
        </div>
        <div className="profile-name">
          <a href="" className="name-profile fw-bold ms-3">
            ${postAuthor}
          </a>
        </div>
      </div>
      <div className="card-title text-styles">
        <h1>{postTitle}</h1>
      </div>
      <div className="card-text">
        <p>{postBody}</p>
        <a href={`/editPost/${postId}`}>
          <button
            type="button"
            className="btn btn-outline-primary ${editOwner}"
          >
            Edit Post
          </button>
        </a>
      </div>
    </div>
  );
}

export default PostDetailCard;
