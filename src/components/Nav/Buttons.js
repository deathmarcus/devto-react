import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Buttons = ({ loggedIn, urlUserProfile }) => {
  console.log("loggedIn en Buttons", urlUserProfile);
  console.log("loggedIn en Buttons", loggedIn);
  const navigate = useNavigate();
  const [usrProfile, setUsrProfile] = useState({});

  const checkLogin = () => {
    if (loggedIn) {
      fetch(urlUserProfile)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log("res", res);
          setUsrProfile(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("usrProfile", usrProfile);
      if (usrProfile.length) {
        return (
          <div>Hay usr profile</div>
          //   <div>
          //     <ul class="dropdown-menu">
          //       <li>
          //         <a class="dropdown-item" href="#">
          //           {usrProfile.userName} {usrProfile.userLastname}
          //           <br />@{usrProfile.userNickname}
          //         </a>
          //       </li>
          //       <li>
          //         <hr class="dropdown-divider" />
          //       </li>
          //       <li>
          //         <a class="dropdown-item" href="#">
          //           Dashboard
          //         </a>
          //       </li>
          //       <li>
          //         <a class="dropdown-item" href="#">
          //           Create Post
          //         </a>
          //       </li>
          //       <li>
          //         <a class="dropdown-item" href="#">
          //           Reading List
          //         </a>
          //       </li>
          //       <li>
          //         <a class="dropdown-item" href="#">
          //           Settings
          //         </a>
          //       </li>
          //       <li>
          //         <hr class="dropdown-divider" />
          //       </li>
          //       <li>
          //         <a class="dropdown-item" id="signOut" href="/index.html">
          //           Sign Out
          //         </a>
          //       </li>
          //     </ul>

          //     <a
          //       href="#"
          //       class="nav-link dropdown-toggle"
          //       data-bs-toggle="dropdown"
          //       role="button"
          //       aria-expanded="false"
          //     >
          //       <img
          //         src={usrProfile.userProfilePic}
          //         alt=""
          //         srcset=""
          //         class="profile"
          //       />
          //     </a>
          //   </div>
        );
      } else {
        return (
          <div>No hay usr Profile</div>
          //   <div>
          //     <div className={`right-nav d-flex align-items-center`}>
          //       <div className={styles.navButton}>
          //         <button
          //           type="button"
          //           className={`btn btn-outline-primary ${styles.buttonLogin}`}
          //         >
          //           Login
          //         </button>
          //       </div>
          //       <div className={styles.navButton}>
          //         <button
          //           type="button"
          //           className={`btn btn-outline-primary ${styles.buttonRegister}`}
          //         >
          //           Create Account
          //         </button>
          //       </div>
          //     </div>
          //   </div>
        );
      }
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
};

export default Buttons;
