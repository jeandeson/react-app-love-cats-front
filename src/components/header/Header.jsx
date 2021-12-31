import React from "react";
import { SiNestjs } from "react-icons/si";
import { BsFillHeartFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions/auth/authAction";
import { NavLink } from "react-router-dom";
import MobileNav from "../mobileNav/MobileNav";
import "./Header.css";
import { useState } from "react";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.user);
  const togleMobileNav = () => {
    const body = document.body;
    body.style.overflow !== "hidden" ? (body.style.overflow = "hidden") : (body.style.overflow = "visible");
    setMobile(!mobile);
  };
  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };
  return (
    <>
      {mobile && <MobileNav togleMobileNav={togleMobileNav} userInfo={userInfo} />}
      <div id="main-header" className="header">
        <SiNestjs className="logo" />
        <h2>CatLover</h2>
        <ul className="header-pages first">
          <li>
            <BsFillHeartFill />
          </li>
          <li onClick={togleMobileNav} className="hamburger">
            <TiThMenu />
          </li>
          <NavLink to={`user/${userInfo?.id}`}>{userInfo?.name}</NavLink>
          <li className="header-logout" onClick={handleLogout}>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
