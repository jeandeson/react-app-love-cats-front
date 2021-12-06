import React from "react";
const Input = ({ Icon, name, onChange, type, placeholder, autocomplete = null, value = "", onKey = null }) => {
  return (
    <div>
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
