import React, { useEffect, useState } from "react";

const Home = () => {
  const [urlPosts, setUrlPosts] = useState("");
  useEffect(() => {
    setUrlPosts("https://devto-challenge-backend.vercel.app/posts/");
  });
  return <div>Home</div>;
};

export default Home;
