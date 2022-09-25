import React, { useState, useContext } from "react";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className="mainWrapper">
      <div className="container col-12">
        <div className="row justify-content-center">
          <div className="card justify-content-center col-8">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
