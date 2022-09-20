import React, { useState } from "react";

const Navbar = () => {
  const [urlUserProfile, setUrlUserProfile] = useState("");
  const tokenNav = localStorage.getItem("token") || "";
  if (tokenNav) {
    const payload = tokenNav.split(".")[1];
    const userId = JSON.parse(atob(payload)).id;
    setUrlUserProfile(
      `https://devto-challenge-backend.vercel.app/users/${userId}`
    );
  }

  return <div>Navbar</div>;
};

export default Navbar;
