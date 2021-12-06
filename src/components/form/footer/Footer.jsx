import React from "react";

const Footer = ({ text, href, hrefText }) => {
  return (
    <div>
      <span className="login-info">{text}</span>
      <a href={href}>{hrefText}</a>
    </div>
  );
};

export default Footer;
