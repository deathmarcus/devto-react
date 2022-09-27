import React, { useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import FormInputField from "../FormInputField/FormInputField"; //PRUEBA DE COMPONENTE REUTILIZABLE
import QuillEditor from "../QuillEditor/QuillEditor";
import TagField from "../TagField/TagField";
import dotsIcon from "../assets/images/dotsbutton.png";
import useDelete from "../../hooks/useDelete";

const EditPostForm = ({ data, postURL }) => {
  const token = localStorage.getItem("token");

  if (token) {
    const payload = token.split(".")[1];
    const id = JSON.parse(atob(payload)).id;
  }
  const id = "";
  const post = data.data.post;

  const [formData, setFormData] = useState({
    postAuthor: post.postAuthorId,
    postImage: post.postImage,
    postTitle: post.postTitle,
    postBody: post.postBody,
  });

  const [tagList, setTagList] = useState({
    postTagList: [],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      postAuthor: id,
    });
  };

  const handleQuill = (e) => {
    setFormData({
      ...formData,
      postBody: e,
      postTimeToRead: Math.ceil(e.length / 150),
    });
  };

  const handleTagify = (e) => {
    const tags = e.detail.tagify.value.map((item) => item.value);
    setTagList({ ...tagList, postTags: tags });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { ...formData, ...tagList };
    const response = await fetch(postURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    // No fue exitoso, no estas autorizado
    if (!jsonData.success) {
      alert(jsonData.error);
    } else {
      // Navegar
      alert("Post Succesfully edit");
      navigate("/");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await fetch(postURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const jsonData = await response.json();
    // No fue exitoso, no estas autorizado
    if (!jsonData.success) {
      alert(jsonData.error);
    } else {
      // Navegar
      alert("Post Succesfully Deleted");
      navigate("/");
    }
  };

  return (
    <>
      <form
        className="card col-12 col-md-9"
        id="createpost_main"
        onSubmit={handleSubmit}
      >
        <div>
          <FormInputField
            type="text"
            className="form-control"
            value={formData.postImage}
            placeholder="Paste here the url of your post cover"
            label="Post Cover Image"
            name="postImage"
            onChange={handleChange}
          />
          <FormInputField
            type="textarea"
            className="form-control"
            value={formData.postTitle}
            placeholder="New post title here..."
            label="Post Title"
            name="postTitle"
            onChange={handleChange}
            rows="3"
          />
          <TagField
            defaultValue={post.postTags}
            onChange={handleTagify}
            name="postTags"
            value={tagList.postTagList}
            label="postTags"
          />
          <QuillEditor
            name="postBody"
            value={formData.postBody}
            placeholder="Write your post content here.."
            onChange={handleQuill}
            defaultValue={formData.postBody}
          />
          <div className="outside-buttons py-3">
            <button
              className=" btn btn-primary outside-button"
              id="save_btn"
              children="Publish"
              type="submit"
            />
            <button
              className="btn btn-light outside-button"
              children="Save Draft"
            />
            <button className="btn btn-light outside-button">
              <img src={dotsIcon} height="20px" />
            </button>

            <button
              className="btn btn-light outside-button"
              children="Revert new changes"
            />
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditPostForm;
