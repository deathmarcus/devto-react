import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Buttons = ({ loggedIn }) => {
  console.log("loggedIn en Buttons", loggedIn);
  const navigate = useNavigate();

  if (loggedIn) return <div>Estas loggeado</div>;
  else {
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
