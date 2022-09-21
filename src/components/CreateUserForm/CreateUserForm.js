import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
// import FormTextInput from "../FormTextInput";

function isEmailValid(email) {
  const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  );
  return emailRegexp.test(email);
}

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    password: "",
    userName: "",
    userLastname: "",
    userNickname: "",
  });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log([e.target.name], e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emptyDataCheck = [
      formData.userEmail,
      formData.password,
      formData.userName,
      formData.userLastname,
      formData.userNickname,
    ];

    if (emptyDataCheck.includes("")) {
      alert("You have empty values");
    } else {
      if (!isEmailValid(formData.userEmail)) {
        alert("Your email has an invalid format");
      } else {
        // Fetch
        const response = await fetch(
          "https://devto-challenge-backend.vercel.app/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formData }),
          }
        );

        const jsonData = await response.json();

        // No fue exitoso, no estas autorizado
        if (!jsonData.success) {
          alert(jsonData.message);
        } else {
          // Navegar
          alert("User Succesfully created");
          navigate("/login");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="card-body py-5">
        <div class="mb-3 row">
          <label htmlFor="email" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label htmlFor="password" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label htmlFor="repeteadPassword" class="col-sm-2 col-form-label">
            Repeat Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              name="repeatedPassword"
              value={formData.repeatedPassword}
              // onChange={verifyPasswordCoincidence}
            />
          </div>
          <div class="mb-3 row">
            <label htmlFor="userName" class="col-sm-2 col-form-label">
              Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name"
                onChange={handleChange}
                name="userName"
                value={formData.userName}
              />
            </div>
          </div>
          {/* <FormTextInput
            label="Name"
            name="userName"
            placeholder="Your Name"
            value={formData.userName}
            onChange={handleChange}
          /> */}
          <div class="mb-3 row">
            <label htmlFor="userLastname" class="col-sm-2 col-form-label">
              Lastname
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                placeholder="Your Lastname"
                onChange={handleChange}
                name="userLastname"
                value={formData.userLastname}
              />
            </div>
          </div>
          {/* <FormTextInput
            label="Lastname"
            name="userLastname"
            placeholder="Your Lastname"
            value={formData.userLastname}
            onChange={handleChange}
          /> */}
          //!Detenido por dudas
          <div class="mb-3 row">
            <label htmlFor="userNickname" class="col-sm-2 col-form-label">
              Nickname
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                placeholder="Your Nickname"
                onChange={handleChange}
                name="userNickname"
                value={formData.userNickname}
              />
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" id="login">
          login
        </button>
      </div>
    </form>
  );
};

export default CreateUserForm;
