import React from "react";
import "./Input.css";
const Input = ({ Icon, name, onChange, type, placeholder, autocomplete = null, value = "", onKey = null }) => {
  return (
    <div className="input-container">
      <Icon />
      <input
        onKeyUp={onKey ? (event) => onKey(event) : null}
        value={value}
        autoComplete={autocomplete}
        name={name}
        onChange={(event) => onChange(event.target)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
