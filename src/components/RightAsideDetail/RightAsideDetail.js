import React, { useState, useEffect } from "react";
import styles from "./RightAsideDetails.module.scss";
import UserProfileCard from "./UserProfileCard";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

// Obtener la información del postDetail
// Leer objeto y obtener la información de usuario
// Guardar en useState
// Imprimir la información

const RightAsideDetail = ({ data }) => {
  console.log("datarightaside", data);
  return (
    <div>
      <div className={`${styles.asideDetailsRight} col-lg-3 col-12 px-3`}>
        <UserProfileCard
          firstName={data.userName}
          lastName={data.userLastname}
          profilePicture={data.userProfilePic}
        />
      </div>
    </div>
  );
};

export default RightAsideDetail;
