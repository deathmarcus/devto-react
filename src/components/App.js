import React from "react";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "../contexts/UserContext";
import Nav from "./Nav";
import CreateUserPage from "../pages/CreateUserPage";
import LoginPage from "../pages/LoginPage";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <header>
          <nav>
            <Nav />
          </nav>
        </header>
        <div>
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/createUser" element={<CreateUserPage />}></Route>
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </UserContextProvider>
    </div>
  );
};

export default App;
