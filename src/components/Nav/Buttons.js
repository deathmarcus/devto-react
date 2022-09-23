import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Buttons = ({ loggedIn, data }) => {
  console.log("loggedIn en Buttons", loggedIn);
  const navigate = useNavigate();
  const [usrData, setUsrData] = useState({});
  console.log("data en buttons", data.data);

  const checkLogin = () => {
    setUsrData(data.data);
    if (loggedIn) {
      console.log("entrando a loggedIn en Buttons");
      if (!usrData.length) {
        console.log("entrando a data en Buttons", usrData);
        return <>Cargando...</>;
      }
      return (
        <>
          {usrData && (
            <>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    {usrData.userName} {usrData.userLastname}
                    <br />@{usrData.userNickname}
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Create Post
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Reading List
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" id="signOut" href="/index.html">
                    Sign Out
                  </a>
                </li>
              </ul>

              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <img
                  src={usrData.userProfilePic}
                  alt=""
                  srcset=""
                  className="profile"
                />
              </a>
            </>
          )}
        </>
      );
    }
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
  };

  useEffect(() => {
    checkLogin();
  }, []);
};

export default Buttons;
