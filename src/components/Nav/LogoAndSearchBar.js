import React from "react";
import logo from "../assets/icons/logo.png";
import styles from "./Navbar.module.scss";

const LogoAndSearchBar = () => {
  return (
    <>
      <div className={`container d-flex align-items-center`}>
        <button
          id="offcanvas_btn"
          className={`btn d-inline-block d-md-none navbar-toggler ${styles.burguerButton}`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <span className={`navbar-toggler-icon nav-span`}></span>
        </button>
        <a className={styles.navbarBrand} href="#" alt="logo">
          <img src={logo} />
        </a>

        <div
          className={`collapse navbar-collapse d-md-flex`}
          id="navbarSupportedContent"
        >
          <div className={styles.inputWrapper}>
            <input
              type="search"
              className={`${styles.input} input-search`}
              id="find-input"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.inputIcon}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoAndSearchBar;
