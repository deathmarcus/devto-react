import React, { useState } from "react";
import RightAsideDetail from "../components/RightAsideDetail";
//import LeftAsideDetail from "../components/LeftAsideDetail";

import LikeToggle from "../components/LikeToggle/LikeToggle";

const PostDetail = () => {
  const [isChecked, setIsChecked] = useState(false);

  // const handleOnCheck = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <div>
      <RightAsideDetail />
      <LikeToggle userLikes="false" />
    </div>
  );
};

export default PostDetail;
