import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import FormInputField from "../FormInputField/FormInputField"; //PRUEBA DE COMPONENTE REUTILIZABLE
// import FormTextInput from "../FormTextInput";

const EditUserForm = ({ data }) => {
  const token = localStorage.getItem("token") || "";

  let id = "";
  if (token != "") {
    const payload = token.split(".")[1];
    id = JSON.parse(atob(payload)).id;
  }

  function isEmailValid(email) {
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    );
    return emailRegexp.test(email);
  }

  const url = `https://devto-challenge-backend.vercel.app/users/${id}`;

  let { userEmail, userName, userLastname, userNickname } = data.data;

  const [formData, setFormData] = useState({
    userEmail: userEmail,
    userName: userName,
    userLastname: userLastname,
    userNickname: userNickname,
  });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function isEmpty(obj) {
    if (Object.values(obj).includes("")) return true;
    else {
      return false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doFetch = async (url) => {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...formData }),
      });

      const jsonData = await response.json();

      // No fue exitoso, no estas autorizado
      if (!jsonData.success) {
        alert(jsonData.message);
      } else {
        // Navegar
        alert("User Succesfully updated");
        navigate("/login");
      }
    };

    !isEmpty(formData)
      ? isEmailValid(formData.userEmail)
        ? doFetch(url)
        : alert("Your email has an invalid format")
      : alert("You have empty values");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInputField
        type="email"
        className="form-control"
        id="email"
        value={formData.userEmail}
        placeholder="name@example.com"
        label="Email"
        name="userEmail"
        onChange={handleChange}
      />
      <FormInputField
        type="password"
        className="form-control"
        value={formData.password}
        placeholder="Type your password"
        label="Password"
        name="password"
        onChange={handleChange}
      />
      <FormInputField
        type="password"
        className="form-control"
        value={formData.repeatedPassword}
        placeholder="Repeat your password"
        label="Repeat Password"
        name="repeatedPassword"
        // onChange={handleChange}
      />
      <FormInputField
        type="text"
        className="form-control"
        value={formData.userName}
        placeholder="Your Name"
        label="Name"
        name="userName"
        onChange={handleChange}
      />
      <FormInputField
        type="text"
        className="form-control"
        value={formData.userLastname}
        placeholder="Your Lastname"
        label="LastName"
        name="userLastname"
        onChange={handleChange}
      />
      <FormInputField
        type="text"
        className="form-control"
        value={formData.userNickname}
        placeholder="Your Nickname"
        label="Nickname"
        name="userNickname"
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary" id="login">
        Update User
      </button>
    </form>
  );
};

export default EditUserForm;
