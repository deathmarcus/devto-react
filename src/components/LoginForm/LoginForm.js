import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

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
      navigate("/index");
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
              name="email"
              value={formData.email}
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
        <button type="submit" class="btn btn-primary" id="login">
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
