import React from "react";
import "./MobileNav.css";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const MobileNav = ({ togleMobileNav, userInfo }) => {
  return (
    <div className="mobile-nav-container">
      <div onClick={togleMobileNav} className="mobile-btn-close">
        <AiFillCloseCircle />
      </div>
      <ul>
        <Link onClick={togleMobileNav} to={"/"}>
          <li>Recents</li>
        </Link>
        <Link onClick={togleMobileNav} to={"/timeline"}>
          <li>Timeline</li>
        </Link>
        <Link onClick={togleMobileNav} to={`/user/${userInfo.id}`}>
          <li>Profile</li>
        </Link>
        <Link onClick={togleMobileNav} to={"/follow"}>
          <li>Follow</li>
        </Link>
        <Link onClick={togleMobileNav} to={"/logout"}>
          <li>Logout</li>
        </Link>
      </ul>
    </div>
  );
};

export default MobileNav;
