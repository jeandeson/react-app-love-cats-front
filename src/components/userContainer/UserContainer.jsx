import React, { useState } from "react";
import Button from "../../components/form/button/Button";
import { Link } from "react-router-dom";
import "./UserContainer.css";

const UserContainer = ({ user, handleFollow, handleUnFollow }) => {
  const [followUser, setFollowUser] = useState(user.verifiedUser);

  const followAction = () => {
    setFollowUser(true);
    handleFollow(user);
  };

  const unFollowAction = () => {
    setFollowUser(false);
    handleUnFollow(user);
  };

  return (
    <Link to={`/user/${user.id}`}>
      <div className="user-container">
        <div className={`user-header`}>
          <div className="user-info">
            <div className="user-info-img">
              <img src={user?.user_image} alt="" />
            </div>
            <span>{user.user_name}</span>
          </div>
          {followUser === true ? (
            <Button onClick={() => unFollowAction()} text="Unfollow" type={"text"} />
          ) : (
            <Button onClick={() => followAction()} text="Follow" type={"text"} />
          )}
        </div>
      </div>
    </Link>
  );
};

export default UserContainer;
