import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Buttons = ({ loggedIn, data }) => {
  console.log("loggedIn en Buttons", loggedIn);
  const navigate = useNavigate();

  const checkLogin = () => {
    if (loggedIn) {
      if (!data.data) {
        return <>Cargando...</>;
      }
      return (
        <>
          <ul className={`dropdown-menu`}>
            <li>
              <a className={`dropdown-item`} href="#">
                {data.data.userName} {data.data.userLastname}
                <br />@{data.data.userNickname}
              </a>
            </li>
            <li>
              <hr className={`dropdown-divider`} />
            </li>
            <li>
              <a className={`dropdown-item`} href="#">
                Dashboard
              </a>
            </li>
            <li>
              <a className={`dropdown-item`} href="#">
                Create Post
              </a>
            </li>
            <li>
              <a className={`dropdown-item`} href="#">
                Reading List
              </a>
            </li>
            <li>
              <a className={`dropdown-item`} href="#">
                Settings
              </a>
            </li>
            <li>
              <hr className={`dropdown-divider`} />
            </li>
            <li>
              <a className={`dropdown-item`} id="signOut" href="/index.html">
                Sign Out
              </a>
            </li>
          </ul>

          <a
            href="#"
            className={`nav-link dropdown-toggle`}
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <img
              src={data.data.userProfilePic}
              alt=""
              srcset=""
              className={styles.profile}
            />
          </a>
        </>
      );
    }
    return (
      <>
        <div className={`right-nav d-flex align-items-center`}>
          <div className={styles.navButton}>
            <Link to={"/login"}>
              <button
                type="button"
                className={`btn btn-outline-primary ${styles.buttonLogin}`}
              >
                Login
              </button>
            </Link>
          </div>
          <div className={styles.navButton}>
            <Link to={"/createUser"}>
              <button
                type="button"
                className={`btn btn-outline-primary ${styles.buttonRegister}`}
              >
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  };

  return checkLogin();
};

export default Buttons;
