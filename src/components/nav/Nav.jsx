import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <div id="main-nav" className="nav">
        <ul className="nav-list">
          <li className="active">All Cats</li>
          <li>Cat Care</li>
          <li>Cat Nutrition</li>
          <li>Cat Problems</li>
          <li>Cat Videos</li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
