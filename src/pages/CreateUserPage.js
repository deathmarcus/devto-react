import React, { useState, useContext } from "react";
import Footer from "../components/Footer/Footer";
import CreateUserForm from "../components/CreateUserForm/CreateUserForm";
const CreateUserPage = () => {
  return (
    <div className="mainWrapper">
      <div className="container col-12">
        <div className="row justify-content-center">
          <div className="card justify-content-center col-8">
            <CreateUserForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserPage;
