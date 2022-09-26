import React, { useEffect } from "react";
import useUnlike from "../../hooks/useLike";

function UnlikeInput({ isChecked, onChange, img }) {
  const { data, loading, error } = useUnlike();
  console.log("entraste a unlike");
  return (
    <div>
      <input
        type="checkbox"
        id="heartCheckbox"
        className="d-none"
        checked={isChecked}
        onChange={onChange}
        label="heartCheckbox"
      />
      <label
        htmlFor="heartCheckbox"
        className="heartCheckbox"
        alt="heartCheckbox"
      >
        <img src={img} alt="heartCheckbox"></img>
      </label>
    </div>
  );
}

export default UnlikeInput;
