import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";

const Nav = () => {
  const userInfo = useSelector((state) => state.auth.user);
  return (
    <>
      {userInfo ? (
        <div id="main-nav" className="nav">
          <ul className="nav-list">
            <NavLink className="nav-link" to="/">
              Recents
            </NavLink>
            <NavLink className="nav-link" to="/timeline">
              Timeline
            </NavLink>
            <NavLink className="nav-link" to={`/user/${userInfo.id}`}>
              Profile
            </NavLink>
            <NavLink className="nav-link" to="/follow">
              Follow
            </NavLink>
            {/* <NavLink className="nav-link" to="/Profile">
              Cats
            </NavLink> */}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Nav;
