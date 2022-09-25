import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import Offcanvas from "./Offcanvas";
import LogoAndSearchBar from "./LogoAndSearchBar";
import Buttons from "./Buttons";
import useFetch from "../../hooks/useFetch";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [url, setUrl] = useState("");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();
  const logOut = () => {
    setUser(null);
    navigate("/LoginForm");
  };

  const { data, loading, error } = useFetch(url);
  console.log("Aqui la data:", data);
  if (error) console.log(error);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("token"));
    console.log("Logged in", loggedIn);
    if (loggedIn) {
      const payload = loggedIn.split(".")[1];
      const userId = JSON.parse(atob(payload)).id;
      setUrl(`https://devto-challenge-backend.vercel.app/users/${userId}`);
    }
  }, [user]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      <div
        className={`container d-flex align-items-center justify-content-between`}
      >
        <div>
          <LogoAndSearchBar />
        </div>
        <div>
          <Offcanvas />
        </div>
        <div className={`container d-flex align-items-center`}>
          <Link to={"/createPost"}>
            <button className={styles.navButton}>Create Post</button>
          </Link>
          {/* <Buttons loggedIn={loggedIn} data={data} /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
