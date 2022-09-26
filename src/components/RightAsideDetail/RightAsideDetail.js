import React, { useState, useEffect } from "react";
import styles from "./RightAsideDetails.module.scss";
import UserProfileCard from "./UserProfileCard";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

// Guardar en useState
// Imprimir la información

const RightAsideDetail = () => {
  const { postId } = useParams();
  const url = `https://devto-challenge-backend.vercel.app/posts/${postId}`;
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    const postAuthorId = data?.data?.post?.postAuthorId;
    if (postAuthorId) {
      fetch(
        `https://devto-challenge-backend.vercel.app/users/?id=${postAuthorId}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          const userName = data.data.userName;
          const userLastName = data.data.userLastname;
          const userProfilePicture = data.data.userProfilePic;
          console.log(userName);
          console.log(userLastName);
          console.log(userProfilePicture);
        });
    }

    console.log(postAuthorId);
  }, [data]);

  const getData = () => {};

  return (
    <div>
      <div className={`${styles.asideDetailsRight} col-lg-3 col-12 px-3`}>
        <UserProfileCard
          firstName="Araceli"
          lastName="Romero"
          profilePicture=""
        />
      </div>
    </div>
  );
};

export default RightAsideDetail;
