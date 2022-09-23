import React from "react";
import styles from "./RightAsideDetails.module.scss";

const RightAsideDetail = () => {
  return (
    <div>
      <div className={`${styles.asideDetailsRight} col-lg-3 col-12 px-3`}>
        <div className={`${styles.card} my-3`}>
          <div className={styles.topcolor}></div>
          <div className={`d-flex justify-flex-start ${styles.cardName} px-3`}>
            <div>
              <img
                src="https://ca.slack-edge.com/TCRFJBKB6-U01DGVDCCUF-57d471ad6ac8-72"
                className={styles.imgUser}
                alt="imageUser"
              />
            </div>
            <div className="p-3">
              <strong>Ale Paez</strong>
            </div>
          </div>

          <div className={`${styles.cardBody} mt-5`}>
            <a href={"index.html"} className="btn btn-primary w-100">
              Follow
            </a>
            <p className="mt-2 w-100">
              Modular and scalable Front End architecture 🗃️ Experienced en
              HTML, CSS and Bootstrap 💻
            </p>
            <p className="mb-1">
              <strong>LOCATION</strong>
            </p>
            <p>Guadalajara</p>
          </div>
        </div>
        <div className={`${styles.card} my-3`}>
          <div className={`d-flex justify-flex-start ${styles.cardName}`}>
            <h5 className={`px-lg-2`}>
              <strong>More from</strong>

              <strong> Ale Paez</strong>
            </h5>
          </div>
          <div className={`${styles.cardBody} selected mt-5`}>
            <p className={`mt-2 w-100`}>
              Easiest list formatting you'll ever use. #javascript #react
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightAsideDetail;
