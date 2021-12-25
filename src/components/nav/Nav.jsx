import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <div id="main-nav" className="nav">
        <ul className="nav-list">
          <NavLink className="nav-link" to="/">
            Recents Cats
          </NavLink>
          <NavLink className="nav-link" to="/timeline">
            Timeline
          </NavLink>
          <NavLink className="nav-link" to="/follow">
            Follow
          </NavLink>
          <NavLink className="nav-link" to="/user/1">
            Users
          </NavLink>
          <NavLink className="nav-link" to="/Profile">
            Cats
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Nav;
