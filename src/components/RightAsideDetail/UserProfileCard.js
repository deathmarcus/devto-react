import React from "react";
import styles from "./RightAsideDetails.module.scss";

const UseProfileCard = (props) => {
  const { firstName, lastName, profilePicture } = props;

  return (
    <div className={`${styles.card} my-3`}>
      <div className={styles.topcolor}></div>
      <div className={`d-flex justify-flex-start ${styles.cardName} px-3`}>
        <div>
          <img
            src="https://placebeard.it/640x360"
            className={styles.imgUser}
            alt="imageUser"
          />
        </div>
        <div className="p-3">
          <strong> {firstName + lastName} </strong>
        </div>
      </div>

      <div className={`${styles.cardBody} mt-5`}>
        <a href={"index.html"} className="btn btn-primary w-100">
          Follow
        </a>
        <p className="mt-2 w-100">
          Develop Fullstack 🗃️ Experienced en HTML, CSS and Bootstrap 💻
          Backend, React
        </p>
        <p className="mb-1">
          <strong>COMPANY</strong>
        </p>
        <p>Kodemia</p>
      </div>
    </div>
  );
};

export default UseProfileCard;
