import React from "react";
import { Route, Routes } from "react-router-dom";

import UserContextProvider from "../contexts/UserContext";
import CreateUserPage from "../pages/CreateUserPage";
import LoginPage from "../pages/LoginPage";
import PostDetail from "../pages/PostDetail";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import EditUserPage from "../pages/EditUserPage";

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/createUser" element={<CreateUserPage />}></Route>
        <Route path="/postDetail" element={<PostDetail />}></Route>
        <Route path="/createPost" element={<CreatePostPage />}></Route>
        <Route path="/editPost/:postId" element={<EditPostPage />}></Route>
        <Route path="/editUser/:id" element={<EditUserPage />}></Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
