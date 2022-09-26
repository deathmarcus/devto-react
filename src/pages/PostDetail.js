import React, { useState } from "react";
import RightAsideDetail from "../components/RightAsideDetail";
//import LeftAsideDetail from "../components/LeftAsideDetail";
import LikeInput from "../components/LikeInput/LikeInput";
import UnlikeInput from "../components/UnlikeInput/UnlikeInput";
import unchekedheart from "../components/assets/images/heart.png";
import checkedheart from "../components/assets/images/heartcheked.png";

const PostDetail = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <RightAsideDetail />
      {isChecked === true ? (
        <LikeInput
          checked={isChecked}
          onChange={handleOnCheck}
          img={checkedheart}
        />
      ) : (
        <UnlikeInput
          checked={isChecked}
          onChange={handleOnCheck}
          img={unchekedheart}
        />
      )}
    </div>
  );
};

export default PostDetail;
