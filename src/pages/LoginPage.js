import React, { useState, useContext } from "react";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className="mainWrapper">
      <div class="container col-12">
        <div class="row justify-content-center">
          <div class="card justify-content-center col-8">
            <LoginForm />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
