import React, { useState, useContext } from "react";
import Footer from "../components/Footer/Footer";
import CreatePostForm from "../components/CreatePostForm/CreatePostForm";

const CreatePostPage = () => {
  return (
    <div class="container">
      <div class="row">
        <CreatePostForm />
        <div class="col-3 d-none d-md-block" id="createpost_help">
          <div class="pt-5">
            <h4>Writing a Great Post Title</h4>
            <ul>
              <li>
                Think of your post title as a super short (but compelling!)
                description — like an overview of the actual post in one short
                sentence.
              </li>
              <li>
                Use keywords where appropriate to help ensure people can find
                your post by search.
              </li>
            </ul>
          </div>
          <div class="pt-5">
            <h4>Editor Basics</h4>
            <ul>
              <li>
                Use Markdown to write and format posts. Commonly used syntax
              </li>
              <li>
                Embed rich content such as Tweets, YouTube videos, etc. Use the
                complete URL: . See a list of supported embeds.
              </li>
              <li>
                In addition to images for the post's content, you can also drag
                and drop a cover image.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
