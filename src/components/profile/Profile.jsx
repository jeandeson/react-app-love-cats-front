import React, { useState } from "react";
import { useEffect } from "react";
import Button from "../form/button/Button";
import { FaUser } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import "./Profile.css";

const Profile = ({ profileInfo, handleFollow, handleUnFollow, handleSetView, changeView }) => {
  const [followUser, setFollowUser] = useState(false);
  useEffect(() => {
    function setFollow() {
      setFollowUser(profileInfo.isFollowed);
    }
    setFollow();
  }, [profileInfo]);
  const followAction = () => {
    setFollowUser(true);
    handleFollow(profileInfo);
    profileInfo.totalfollows++;
  };

  const unFollowAction = () => {
    setFollowUser(false);
    handleUnFollow(profileInfo);
    profileInfo.totalfollows--;
  };
  return (
    <div className="profile-container">
      {changeView === "user" ? (
        <div className="profile-info">
          <FaUser />
          <div className="profile-change">
            <div>
              <button>User</button>
            </div>
            <div>
              <button className="profile-btn-unselected" onClick={handleSetView}>
                Cat
              </button>
            </div>
          </div>
          <div className="profile-img">
            <img src={profileInfo.user_image} alt="" />
          </div>
          <span>{profileInfo.user_name ?? "User Name"}</span>
          <div className="profile-status">
            <div>
              <span>Posts</span>
              <span>{profileInfo.total_post ?? 0}</span>
            </div>
            <div>
              <span>Following</span>
              <span>{profileInfo.totalfollowed ?? 0}</span>
            </div>
            <div>
              <span>Follows</span>
              <span>{profileInfo.totalfollows ?? 0}</span>
            </div>
          </div>
          {followUser === true ? (
            <Button onClick={() => unFollowAction()} text="Unfollow" type={"text"} />
          ) : (
            <Button onClick={() => followAction()} text="Follow" type={"text"} />
          )}
        </div>
      ) : (
        <div className="profile-info">
          <FaCat />
          <div className="profile-change">
            <div>
              <button className="profile-btn-unselected" onClick={handleSetView}>
                User
              </button>
            </div>
            <div>
              <button>Cat</button>
            </div>
          </div>
          <div className="profile-img">
            <img src={profileInfo.cat.cat_image} alt="" />
          </div>
          <span>{profileInfo.cat.cat_name}</span>
          <div className="profile-status">
            <div>
              <span>Color</span>
              <span>{profileInfo.cat.color}</span>
            </div>
            <div>
              <span>Owner</span>
              <span>{profileInfo.user_name}</span>
            </div>
            <div>
              <span>Genere</span>
              <span>{profileInfo.cat.genere}</span>
            </div>
          </div>
          {followUser === true ? (
            <Button onClick={() => unFollowAction()} text="Unfollow" type={"text"} />
          ) : (
            <Button onClick={() => followAction()} text="Follow" type={"text"} />
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
