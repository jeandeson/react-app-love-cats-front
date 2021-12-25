import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import "./FileInput.css";

const FileInput = ({ value, text, Icon, name, onChange, autocomplete = null, onKey = null }) => {
  return (
    <>
      <div className="input-file-container">
        <Icon />
        <label className="label-input-file" htmlFor="fileInput">
          {text}
        </label>
        <input
          className="file-upload-input"
          id="fileInput"
          name={name}
          onKeyUp={onKey ? (event) => onKey(event) : null}
          autoComplete={autocomplete}
          onChange={(event) => onChange(event.target)}
          type="file"
        />
        {value && <BsCheck2Circle />}
      </div>
    </>
  );
};

export default FileInput;
