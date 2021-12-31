import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UserService from "../../services/userService";
import "./CommentBox.css";

const userService = new UserService();
const CommentSection = ({ comment }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function handleGetUserInfo() {
      const { data } = await userService.getbyId(comment.user_id);
      setUser(data);
    }
    handleGetUserInfo();
  }, [comment]);
  return (
    <div key={comment.id} className="comment-section">
      <div className="comment-img-container">
        <img src={user.user_image} alt="" />
      </div>
      <div className="comment-box">
        <span>{user.user_name}</span>
        <span className="comment-content">{comment.content}</span>
      </div>
    </div>
  );
};

export default CommentSection;
