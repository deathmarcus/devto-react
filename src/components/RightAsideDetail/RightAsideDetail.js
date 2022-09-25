import React from "react";
import styles from "./RightAsideDetails.module.scss";
import UserProfileCard from "./UserProfileCard";

// Obtener la información del postDetail
// Leer objeto y obtener la información de usuario
// Guardar en useState
// Imprimir la información

const RightAsideDetail = () => {
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
