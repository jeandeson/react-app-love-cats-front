import React from "react";
import PostService from "../../../services/postService.js";
import { useDispatch } from "react-redux";
import { showAction } from "../../../redux/actions/notification/notificationActions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { MdPublish } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
// import { MdTagFaces } from "react-icons/md";
import "./NewPost.css";

const postService = new PostService();
const NewPost = ({ handleAddPost }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.user);
  const [postContent, setPostContent] = useState({});
  const handleSetPost = (value) => {
    setPostContent(value);
  };
  const handleCreatePost = async () => {
    try {
      const body = {
        user_id: userInfo.id,
        content: postContent,
      };
      const { data } = await postService.post(body);
      const created = await postService.getbyId(data.id);
      console.log(data.id);
      console.log(created);
      handleAddPost(created.data);
      dispatch(showAction({ type: "notification-sucess", message: "Post success!" }));
    } catch (error) {
      dispatch(showAction({ type: "notification-danger", message: "Post failed!" }));
      console.log(error);
    }
  };
  return (
    <div className="new-post-container">
      <div className="new-post-header">
        <div className="new-post-img">
          <img src={userInfo.image} alt="user" />
        </div>
        <input
          onChange={(event) => handleSetPost(event.target.value)}
          type="text"
          placeholder="What are you thinking about?"
        />
      </div>
      <div className="new-post-action">
        <span onClick={handleCreatePost}>
          <MdPublish />
          Publish
        </span>
        <span>
          <IoMdPhotos />
          Photo/video
        </span>
        {/* <span>
          <MdTagFaces />
          Feelings/activities
        </span> */}
      </div>
    </div>
  );
};

export default NewPost;
