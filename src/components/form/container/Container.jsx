import React from "react";

const Container = ({ children }) => {
  return (
    <div className="form-container">
      <form className="form-login">{children}</form>
    </div>
  );
};

export default Container;
