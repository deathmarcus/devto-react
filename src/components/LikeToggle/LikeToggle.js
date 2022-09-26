import React, { useState, useEffect } from "react";
import unchekedheart from "../../components/assets/images/heart.png";
import checkedheart from "../../components/assets/images/heartcheked.png";
import { useParams } from "react-router-dom";
import axios from "axios";

function LikeToggle({ onClick }) {
  const [userLikes, setUserLikes] = useState(false);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const token = localStorage.getItem("token") || "";

  const payload = token.split(".")[1];
  const userId = JSON.parse(atob(payload)).id;

  const postId = params.postId;

  let body = {
    postId: postId,
    likes: userId,
  };

  const handleOnLike = () => {
    setUserLikes(!userLikes);

    //
    (async function () {
      try {
        setLoading(true);
        const response = await axios({
          method: "post",
          url: "https://devto-challenge-backend.vercel.app/likes",
          data: body,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  };

  const handleOnUnLike = () => {
    setUserLikes(!userLikes);
    console.log("YA NO ME GUSTA");
    (async function () {
      try {
        setLoading(true);
        const response = await axios({
          method: "patch",
          url: "https://devto-challenge-backend.vercel.app/likes",
          data: body,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  };

  return (
    <div>
      {userLikes === true ? (
        <button type="button" onClick={handleOnUnLike} children="LIKE">
          <img src={checkedheart} />
        </button>
      ) : (
        <button type="button" onClick={handleOnLike} children="UNLIKE">
          <img src={unchekedheart} />
        </button>
      )}
      ;
    </div>
  );
}

export default LikeToggle;
