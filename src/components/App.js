import React from "react";
import { Route, Routes } from "react-router-dom";

import UserContextProvider from "../contexts/UserContext";
import CreateUserPage from "../pages/CreateUserPage";
import LoginPage from "../pages/LoginPage";

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/createUser" element={<CreateUserPage />}></Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
