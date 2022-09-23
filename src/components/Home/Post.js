import React from "react";
import styles from "./Home.module.scss";

import CardImage from "./CardImage";
import UserInfoCard from "./UserInfoCard";
import CardTitle from "./CardTitle";
import CardBottom from "./CardBottom";

const Post = ({ post, showCover = false }) => {
  //   let tagsArray = posts[0].postTags.join("\n");
  //   let tagsArray2 = tagsArray.split("\n");
  {
    return (
      <>
        <a href={`./postDetail.html?postId=${post._id}`}>
          <div className={`${styles.indCard} ${styles.borderCard}`}>
            <ul className={`list-group list-group-flush`}>
              {showCover && <CardImage image={post.postImage} />}
              <UserInfoCard
                author={post.postAuthor}
                date={post.postCreationDate}
                authorId={post.postAuthorId}
              />
              <CardTitle title={post.postTitle} />
              <CardBottom
                likes={post.postLikesCount}
                read={post.postTimeToRead}
              />
            </ul>
          </div>
        </a>
      </>
    );
  }
};

export default Post;
