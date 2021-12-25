import React from "react";
import { Link } from "react-router-dom";
const Footer = ({ text, href, hrefText }) => {
  return (
    <div>
      <span className="login-info">{text}</span>
      <Link to={href}>Link</Link>
    </div>
  );
};

export default Footer;
