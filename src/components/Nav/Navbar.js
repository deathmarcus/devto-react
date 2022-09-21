import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import NavbarComponents from "./NavbarComponents";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [urlUserProfile, setUrlUserProfile] = useState("");
  const [loggedIn, setLoggedIn] = useState(!!user?.token);

  const navigate = useNavigate();
  const logOut = () => {
    setUser(null);
    navigate("/LoginForm");
  };

  useEffect(() => {
    console.log("Logged in", loggedIn);
    if (loggedIn) {
      const payload = user.token.split(".")[1];
      const userId = JSON.parse(atob(payload)).id;
      setUrlUserProfile(
        `https://devto-challenge-backend.vercel.app/users/${userId}`
      );

      console.log("urlUserProfile", urlUserProfile);
    }
  });

  return (
    <div>
      <div class="d-flex align-items-center">
        <button
          id="offcanvas_btn"
          class="btn d-inline-block d-md-none navbar-toggler burguer-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <span class="navbar-toggler-icon nav-span"></span>
        </button>
        <a class="navbar-brand" href="#" alt="logo">
          <img src="/assets/icons/logo.png" alt="" />
        </a>

        <div
          class="collapse navbar-collapse d-md-flex"
          id="navbarSupportedContent"
        >
          <div class="input-wrapper">
            <input
              type="search"
              class="input input-search"
              id="find-input"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="input-icon"
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
      <div>
        <NavbarComponents />
      </div>
    </div>
  );
};

export default Navbar;
