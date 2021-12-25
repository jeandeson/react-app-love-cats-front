import React from "react";
import Button from "../form/button/Button";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <div className="profile-img">
          <img
            src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
        <span>José Ferreira Costa</span>
        <div className="profile-status">
          <div>
            <span>Posts</span>
            <span>0</span>
          </div>
          <div>
            <span>Following</span>
            <span>0</span>
          </div>
          <div>
            <span>Follows</span>
            <span>0</span>
          </div>
        </div>
        <Button type={"text"} text={"Follow"} />
      </div>
    </div>
  );
};

export default Profile;
