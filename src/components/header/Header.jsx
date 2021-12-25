import React from "react";
import { SiNestjs } from "react-icons/si";
import { BsFillHeartFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions/auth/authAction";
import "./Header.css";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logoutAction());
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
          <li>{userInfo?.user?.name}</li>
          <li onClick={handleLogout}>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
