import React from "react";

function CheckboxInput({ isChecked, onChange, img, label, className }) {
  return (
    <div>
      <input
        type="checkbox"
        id={label}
        className={className}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={label} className={label} alt={label}>
        <img src={img} alt={label}></img>
      </label>
    </div>
  );
}

export default CheckboxInput;
