import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import useFetch from "../../hooks/useFetch";
import styles from "./Navbar.module.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/icons/logo.png";
import Buttons from "./Buttons";
import Offcanvas from "./Offcanvas";

const NavbarM = () => {
  return (
    <div className={styles.nav}>
      <div
        className={`container d-flex align-items-center justify-content-between ${styles.navbar} `}
      >
        <Navbar expand="lg">
          <Container>
            <Offcanvas />
          </Container>
          <Container className={styles.leftSide}>
            <Navbar.Brand className={styles.navbarBrand} alt="logo" href="/">
              <img src={logo} />
            </Navbar.Brand>
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
          </Container>
          <Container>
            <Buttons />
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarM;
