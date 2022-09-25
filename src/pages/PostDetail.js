import React, { useState } from "react";
import RightAsideDetail from "../components/RightAsideDetail";
//import LeftAsideDetail from "../components/LeftAsideDetail";
import CheckboxInput from "../components/CheckboxInput/CheckboxInput";
import unchekedheart from "../components/assets/images/heart.png";
import checkedheart from "../components/assets/images/heartcheked.png";

const PostDetail = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log("🚀 PostDetail ~ isChecked", isChecked);

  const handleOnCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <RightAsideDetail />
      <CheckboxInput
        checked={isChecked}
        onChange={handleOnCheck}
        img={isChecked ? checkedheart : unchekedheart}
        label="heartCheckbox"
        className="d-none"
      />
    </div>
  );
};

export default PostDetail;
