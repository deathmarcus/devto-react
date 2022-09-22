import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Buttons = ({ loggedIn, urlUserProfile }) => {
  console.log("loggedIn en Buttons", urlUserProfile);
  const navigate = useNavigate();
  let usrProfile = "";

  if (loggedIn) {
    fetch(urlUserProfile, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("res", res);
        usrProfile = res.data;
        console.log("usrProfile", usrProfile);
      })
      .then(() => {
        return (
          <div>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  {usrProfile.userName} {usrProfile.userLastname}
                  <br />@{usrProfile.userNickname}
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Dashboard
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Create Post
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Reading List
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" id="signOut" href="/index.html">
                  Sign Out
                </a>
              </li>
            </ul>

            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              <img
                src={usrProfile.userProfilePic}
                alt=""
                srcset=""
                class="profile"
              />
            </a>
          </div>
        );
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    return (
      <div>
        <div className={`right-nav d-flex align-items-center`}>
          <div className={styles.navButton}>
            <button
              type="button"
              className={`btn btn-outline-primary ${styles.buttonLogin}`}
            >
              Login
            </button>
          </div>
          <div className={styles.navButton}>
            <button
              type="button"
              className={`btn btn-outline-primary ${styles.buttonRegister}`}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Buttons;
