import React from "react";
import styles from "./Home.module.scss";
import like from "../assets/icons/like.png";
import comment from "../assets/icons/comment.png";

const Post = ({ posts }) => {
  console.log("posts en POST", posts);
  let tagsArray = posts[0].postTags.join("\n");
  let tagsArray2 = tagsArray.split("\n");
  return (
    <div>
      <a
        href="./postDetail.html?postId=${posts[0]._id}"
        className={`post_detail_id`}
      >
        <div className={`${styles.indCard} ${styles.borderCard}`}>
          <ul className={`list-group list-group-flush`}>
            <img
              src={posts[0].postImage}
              className={`card-img-top`}
              alt="..."
            />
            <li className={`list-group-item ${styles.userP1}`}>
              <div className={`d-flex user-card-p1`}>
                <div className={`flex-shrink-0 user-pic`} id="user_info">
                  <img src="userImg" alt="" srcset="" />
                </div>
                <div
                  className={`flex-grow-1 ms-3 ${styles.userStoryTextP1} lh-1`}
                >
                  <span className={styles.storyUsernameP1}>
                    <small>{posts[0].postAuthor}</small>
                  </span>
                  <br />
                  <span className={styles.storyPostdateP1}>
                    <small>{posts[0].postCreationDate.substring(0, 10)}</small>
                  </span>
                </div>
              </div>
            </li>
            <li className={`list-group-item ${styles.storyTextP1}`}>
              <div className={styles.storyTitleP11}>{posts[0].postTitle}</div>
            </li>
            <li className={`list-group-item`}>
              <div className={styles.cardBottomP1}>
                <div className={styles.bottomLeftP1}>
                  <img
                    src={like}
                    className={styles.propertiesIconP1}
                    alt=""
                    srcset=""
                  />{" "}
                  {posts[0].postLikesCount} Reactions
                  <img
                    src={comment}
                    className={styles.propertiesIconP1}
                    alt=""
                    srcset=""
                  />{" "}
                  0 Comments
                </div>
                <div className={styles.bottomRightP1}>
                  <span className={styles.storyReadTimeP1}>
                    {posts[0].postTimeToRead} min read
                  </span>
                  <button type="button" className={`btnSm`}>
                    Save
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
};

export default Post;
