import React from "react";
import styles from "./Home.module.scss";

const CardTitle = ({ title }) => {
  return (
    <div>
      <li className={`${styles.listGroupItem} ${styles.storyTextP1}`}>
        <div className={styles.storyTitleP11}>{title}</div>
      </li>
    </div>
  );
};

export default CardTitle;
