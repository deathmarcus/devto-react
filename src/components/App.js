import React from "react";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "../contexts/UserContext";
import Nav from "./Nav";
import CreateUserPage from "../pages/CreateUserPage";
import LoginPage from "../pages/LoginPage";
import CreatePostPage from "../pages/CreatePostPage";
import Footer from "./Footer/Footer";
import EditPostPage from "../pages/EditPostPage";
import HomePage from "./Home/Home";

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
            <Route path="/createPost" element={<CreatePostPage />}></Route>
            <Route path="/editPost/:postId" element={<EditPostPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
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
