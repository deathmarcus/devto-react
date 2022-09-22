import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import Offcanvas from "./Offcanvas";
import LogoAndSearchBar from "./LogoAndSearchBar";
import Buttons from "./Buttons";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [urlUserProfile, setUrlUserProfile] = useState("");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();
  const logOut = () => {
    setUser(null);
    navigate("/LoginForm");
  };

  useEffect(() => {
    setLoggedIn(localStorage.getItem("token"));
    console.log("Logged in", loggedIn);
    if (loggedIn) {
      const payload = user.token.split(".")[1];
      const userId = JSON.parse(atob(payload)).id;
      setUrlUserProfile(
        `https://devto-challenge-backend.vercel.app/users/${userId}`
      );

      console.log("urlUserProfile", urlUserProfile);
    }
  }, [user]);

  return (
    <div>
      <div className={`container d-flex align-items-center`}>
        <div>
          <LogoAndSearchBar />
        </div>
        {/* <div>
        <Offcanvas />
      </div> */}
        <div>
          <Buttons loggedIn={loggedIn} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
