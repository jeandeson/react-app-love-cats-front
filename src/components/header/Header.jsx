import React from "react";
import { SiNestjs } from "react-icons/si";
import { BsFillHeartFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import "./Header.css";
import AuthService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const authService = new AuthService();
  const handleLogout = () => {
    authService.handleLogout();
    navigate("/login");
  };
  return (
    <>
      <div id="main-header" className="header">
        <SiNestjs className="logo" />
        <h2>CatLover</h2>
        <ul className="header-pages first">
          <li>
            <BsFillHeartFill />
          </li>
          <li className="hamburger">
            <TiThMenu />
          </li>
          <li onClick={handleLogout}>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
