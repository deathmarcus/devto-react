import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import FormInputField from "../FormInputField/FormInputField";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("solicitud:", JSON.stringify({ ...formData }));

    const response = await fetch(
      "https://devto-challenge-backend.vercel.app/auth",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      }
    );
    const jsonData = await response.json();

    if (!jsonData.success) {
      alert("Ingresaste mal tus datos");
    } else {
      localStorage.setItem("token", jsonData.data.token);
      setUser({ token: jsonData.data.token });
      navigate("/");
    }
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
        name="email"
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
      <button type="submit" className="btn btn-primary" id="login">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;

