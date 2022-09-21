import React from "react";

const FormInputField = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
}) => (
  <div class="mb-3 row">
    {label && <label htmlFor="input-field">{label}</label>}
    <div class="col-sm-10">
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  </div>
);

export default FormInputField;
