import React, { useEffect, useState } from "react";
import Post from "./Post";

const Home = () => {
  const [posts, setPosts] = useState({});
  const [error, setError] = useState(false);

  const fetchData = () => {
    const UrlPosts = "https://devto-challenge-backend.vercel.app/posts/";
    fetch(UrlPosts)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let arr = res.data.posts;
        arr.reverse();
        setPosts(arr);
        console.log("posts", posts);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("posts afuera de useEffect", posts);

  if (!posts.length) {
    return <div>Cargando...</div>;
  }
  return (
    <div>
      <div className={`row main_section`}>
        <div className={`container col-12`}>
          <div className={`col-12 card-p1-global y-2`} id="main_posts_cards">
            <Post posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
