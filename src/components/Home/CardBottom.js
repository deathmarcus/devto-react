import React from "react";
import like from "../assets/icons/like.png";
import comment from "../assets/icons/comment.png";
import styles from "./Home.module.scss";

const CardBottom = ({ likes, read }) => {
  return (
    <div>
      <li className={styles.listGroupItem}>
        <div className={styles.cardBottomP1}>
          <div className={styles.bottomLeftP1}>
            <img
              src={like}
              className={styles.propertiesIconP1}
              alt=""
              srcset=""
            />{" "}
            {likes} Reactions
            <img
              src={comment}
              className={styles.propertiesIconP1}
              alt=""
              srcset=""
            />{" "}
            0 Comments
          </div>
          <div className={styles.bottomRightP1}>
            <span className={styles.storyReadTimeP1}>{read} min read</span>
            <button type="button" className={`btnSm`}>
              Save
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CardBottom;
