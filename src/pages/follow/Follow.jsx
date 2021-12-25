import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showAction } from "../../redux/actions/notification/notificationActions";
import SearchUser from "../../components/search/SearchUser";
import UserContainer from "../../components/userContainer/UserContainer";
import UserService from "../../services/userService";
import ActionService from "../../services/actionService";
import { SiReact } from "react-icons/si";
import "./Follow.css";

const userService = new UserService();
const actionService = new ActionService();
const Follow = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.auth.user);
  const [searchedUsers, setSearchedUsers] = useState([]);

  const handleSearch = async (name) => {
    const { data: searchedUsers } = await userService.getAll(name, userInfo.id);
    searchedUsers.forEach(async (user, index) => {
      const { data: verifiedUser } = await actionService.verifyFollow({ user_id: userInfo.id, followed_id: user.id });
      if (verifiedUser[0]) {
        searchedUsers[index].verifiedUser = true;
      } else {
        searchedUsers[index].verifiedUser = false;
      }
      setSearchedUsers(searchedUsers);
    });
  };

  const handleFollow = async (body) => {
    const { data } = await actionService.follow({ user_id: userInfo.id, followed_id: body.id });
    if (data) {
      dispatch(showAction({ type: "notification-sucess", message: "You are following " + body.user_name }));
    }
  };

  const handleUnFollow = async (body) => {
    const data = await actionService.unFollow({ user_id: userInfo.id, followed_id: body.id });
    if (data) {
      dispatch(showAction({ type: "notification-sucess", message: "You are unfollowing " + body.user_name }));
    }
  };

  return (
    <div className="follow-container">
      <SearchUser handleSearch={handleSearch} />
      {searchedUsers.length > 0 ? (
        searchedUsers.map((user) => (
          <UserContainer
            key={user.id}
            user={user}
            handleFollow={handleFollow}
            handleUnFollow={handleUnFollow}
            userInfo={userInfo}
          />
        ))
      ) : (
        <div className="waiting-follow">
          <span>Type something to search a user</span>
          <SiReact />
        </div>
      )}
    </div>
  );
};

export default Follow;
