import React from "react";
import ReactDOM from "react-dom";
import Tags from "@yaireo/tagify/dist/react.tagify"; // React-wrapper file
import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS

// import "./styles.css";

// Tagify settings object
const settings = {
  blacklist: [],
  maxTags: 4,
  backspace: "edit",
  placeholder: "write some tags...",
  editTags: 1,
  dropdown: {
    enabled: 0,
  },
  callbacks: {},
};

function TagField({ label, name, onChange, value, defaultValue = [] }) {
  //   console.log("label:", label, "name:", name, "value:", value);

  return (
    <div className="form-group mb-3">
      <label htmlFor={"field-" + name}>{label}</label>
      <Tags
        settings={settings}
        defaultValue={defaultValue}
        onChange={onChange}
        name={name}
        // value={value}
      />
    </div>
  );
}

export default TagField;
