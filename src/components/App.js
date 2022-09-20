import React from "react";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "../contexts/UserContext";

import LoginPage from "./LoginPage";

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
