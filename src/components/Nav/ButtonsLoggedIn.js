import React, { useState, useRef, useContext, useEffect } from "react";
import styles from "./Navbar.module.scss";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const ButtonsLoggedIn = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const logOut = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/Login");
  };

  return (
    <div>
      <div>
        <img
          src={user.user.userProfilepic}
          alt=""
          srcset=""
          className={styles.profile}
          onClick={handleClick}
        />
      </div>
      <Container>
        <NavDropdown>
          <Dropdown.Item href={`/editUser/${user.user.userId}`}>
            {user.user.userName} {user.user.userLastname}
            <br />@{user.user.userNickname}
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item>
          <Dropdown.Item href="/createPost">Create Post</Dropdown.Item>
          <Dropdown.Item href="/">Reading List</Dropdown.Item>
          <Dropdown.Item href="/">Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item type="button" onClick={logOut}>
            Sign Out
          </Dropdown.Item>
        </NavDropdown>
      </Container>
    </div>
  );
};

export default ButtonsLoggedIn;
