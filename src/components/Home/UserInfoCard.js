import React from "react";
import styles from "./Home.module.scss";
import useFetch from "../../hooks/useFetch";

const UserInfoCard = ({ author, date, authorId }) => {
  const url = `https://devto-challenge-backend.vercel.app/users/${authorId}`;
  // const { data, loading, error } = useFetch(url);

  return (
    <div>
      {/* {data && (
        <li className={`${styles.listGroupItem} ${styles.userP1}`}>
          <div className={`d-flex ${styles.userCardP1}`}>
            <div className={`flex-shrink-0`} id="user_info">
              <img src={data.data.userProfilePic} alt="" srcset="" />
            </div>
            <div className={`flex-grow-1 ms-3 ${styles.userStoryTextP1} lh-1`}>
              <span className={styles.storyUsernameP1}>
                <small>{author}</small>
              </span>
              <br />
              <span className={styles.storyPostdateP1}>
                <small>{date.substring(0, 10)}</small>
              </span>
            </div>
          </div>
        </li>
      )} */}
    </div>
  );
};

export default UserInfoCard;
