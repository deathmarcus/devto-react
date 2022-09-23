import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "../Home/Home.module.scss";

const Home = (data) => {
  const [posts, setPosts] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    setPosts(data.data.data.posts);
  }, []);

  if (!posts.length) {
    return <div>Cargando...</div>;
  }
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <>
            <div className={`row`}>
              <div className={`container col-12`}>
                <div
                  className={`col-12 ${styles.cardP1Global} y-2`}
                  key={post.id}
                  id="main_posts_cards"
                >
                  <Post post={post} showCover={index === 0} />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;
