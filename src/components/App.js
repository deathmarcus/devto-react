import React from "react";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "../contexts/UserContext";
import Nav from "./Nav";
import CreateUserPage from "../pages/CreateUserPage";
import LoginPage from "../pages/LoginPage";
import PostDetail from "../pages/PostDetail";
import CreatePostPage from "../pages/CreatePostPage";
import Footer from "./Footer/Footer";
import EditPostPage from "../pages/EditPostPage";
import HomePage from "../pages/HomePage";
import EditUserPage from "../pages/EditUserPage";

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <header>
          {/* <nav>
            <Nav />
          </nav> */}
        </header>
        <>
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/createUser" element={<CreateUserPage />}></Route>
            <Route path="/postDetail/:postId" element={<PostDetail />}></Route>
            <Route path="/createPost" element={<CreatePostPage />}></Route>
            <Route path="/editPost/:postId" element={<EditPostPage />}></Route>
            <Route path="/editUser/:id" element={<EditUserPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </>
        <div>
          <Footer />
        </div>
      </UserContextProvider>
    </div>
  );
};

export default App;
