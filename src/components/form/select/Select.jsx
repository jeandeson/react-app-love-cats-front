import React from "react";
import "./Select.css";

const Select = ({ value = "", options, Icon, name, onChange, autocomplete = null, onKey = null }) => {
  return (
    <>
      <div>
        <Icon />
        <select
          value={value}
          className="form-select-box"
          id="file"
          name={name}
          onKeyUp={onKey ? (event) => onKey(event) : null}
          autoComplete={autocomplete}
          onChange={(event) => onChange(event.target)}
          type="file"
        >
          {options.map((option, index) => (
            <option value={option.text} key={index}>
              {option.text.charAt(0).toUpperCase() + option.text.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
