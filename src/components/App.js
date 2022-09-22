import React from "react";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "../contexts/UserContext";
import Nav from "./Nav";
import CreateUserPage from "../pages/CreateUserPage";
import LoginPage from "../pages/LoginPage";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";

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
          </Routes>
        </div>
      </UserContextProvider>
    </div>
  );
};

export default App;
