import React, { useEffect, useState } from "react";
import Profile from "../../components/profile/Profile";
import { showAction } from "../../redux/actions/notification/notificationActions";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import UserService from "../../services/userService";
import CatService from "../../services/catService";
import PostService from "../../services/postService";
import ActionService from "../../services/actionService";

const userService = new UserService();
const catService = new CatService();
const postService = new PostService();
const actionService = new ActionService();

const User = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.user);
  const [profileInfo, setProfileInfo] = useState({});
  const [changeView, setChangeView] = useState("user");
  const { id } = useParams();
  useEffect(() => {
    async function handleGetProfileInfo() {
      const { data: user } = await userService.getbyId(id);
      const { data: cat } = await catService.getbyId(id);
      const { data: post } = await postService.getbyId(id);
      const { data: follow } = await actionService.getTotalFollow(id);
      const { data: isFollowing } = await actionService.verifyFollow({ user_id: userInfo.id, followed_id: id });
      user.isFollowed = isFollowing[0] ? true : false;
      user.totalfollows = follow[0] ? follow[0].total_followed : 0;
      user.totalfollowed = follow[1] ? follow[1].total_followed : 0;
      user.cat = cat;
      setProfileInfo({ ...user, ...post });
    }
    handleGetProfileInfo();
  }, [id, userInfo.id]);

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

  const handleSetView = () => {
    changeView === "user" ? setChangeView("cat") : setChangeView("user");
  };
  return (
    <>
      <Profile
        profileInfo={profileInfo}
        handleFollow={handleFollow}
        handleUnFollow={handleUnFollow}
        handleSetView={handleSetView}
        changeView={changeView}
      />
    </>
  );
};

export default User;
