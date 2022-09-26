import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const ButtonsNotLogged = () => {
  return (
    <div>
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
    </div>
  );
};

export default ButtonsNotLogged;
