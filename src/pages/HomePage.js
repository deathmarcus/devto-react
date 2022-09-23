import React, { useState, useContext } from "react";
import Home from "../components/Home/Home";
import useFetch from "../hooks/useFetch.js";
import styles from "../components/Home/Home.module.scss";
import LeftAside from "../components/Home/LeftAside";
import RightAside from "../components/Home/RightAside";
import NavPills from "../components/Home/NavPills";

const HomePage = () => {
  const url = "https://devto-challenge-backend.vercel.app/posts/";
  const { data, loading, error } = useFetch(url);
  console.log("Aqui la data Homepage:", data);
  if (error) console.log(error);

  return (
    <div className={styles.mainWrapper}>
      <div className={`container col-12`}>
        <div className={`row`}>
          <LeftAside />
          <section
            className={`container ${styles.p1} col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ${styles.sectionMainCards}`}
          >
            <NavPills />
            {loading && <div>Loading...</div>}
            {data && <Home data={data} />}
          </section>
          <RightAside />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
