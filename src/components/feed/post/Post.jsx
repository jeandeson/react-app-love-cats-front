import React, { useEffect, useState, memo } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import LikeService from "../../../services/likeService";
import UserService from "../../../services/userService";
import { useSelector } from "react-redux";
import "./Post.css";
import CommentBox from "../../commentBox/CommentBox";
import ActionService from "../../../services/actionService";

const userService = new UserService();
const likeService = new LikeService();
const actionService = new ActionService();
const Post = ({ post, user }) => {
  const [comment, setComment] = useState({});
  const [userData, setUserData] = useState({});
  const [likeData, setLikeData] = useState({});
  const authUser = useSelector((state) => state.auth.user);
  const [liked, setIsLiked] = useState(false);
  useEffect(() => {
    console.log(post);
    async function handleGetUser() {
      const { data } = await userService.getbyId(post.user_id);
      setUserData(data);
    }
    async function handleGetLikeData() {
      const { data } = await likeService.getAll(post.id);
      setLikeData(data);
      const isLike = data.find((like) => like.user_id === user.id);
      if (isLike) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }
    handleGetUser();
    handleGetLikeData();
  }, [post.id, post.user_id, user.id, post]);

  const handleSetComment = (value) => {
    setComment(value);
  };

  const handleComment = async (event) => {
    if (event.charCode === 13) {
      const { data } = await actionService.comment({ user_id: user.id, post_id: post.id, content: comment });
      console.log(data);
    }
  };

  const handleLike = async () => {
    const isLike = likeData.find((like) => like.user_id === user.id);
    if (isLike) {
      await likeService.delete(isLike.id);
      setIsLiked(false);
      setLikeData(likeData.filter((like) => like.id !== isLike.id));
    } else {
      const { data } = await likeService.post({ post_id: post.id, user_id: user.id });
      setIsLiked(true);
      setLikeData([...likeData, data]);
    }
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-img">
          <img src={userData?.user_image} alt="" />
        </div>
        <div className="post-header-info">
          <div>{userData.user_name}</div>
          <div className="post-detail">{post.created_at?.replace(" ", " at ")}</div>
        </div>
        <div className="post-options">
          <span>
            <IoIosMore />
          </span>
        </div>
      </div>
      <div className="post-content">{post?.content}</div>
      <div className="post-interactions">
        <span className="post-detail">{likeData.length} Likes</span>
        <span className="post-detail">33 comments</span>
      </div>
      <div className="post-action">
        <span onClick={handleLike} className={liked === true ? "liked" : "notliked"}>
          <AiTwotoneLike />
          Like
        </span>
        <span>
          <FaComment />
          Comment
        </span>
      </div>
      <div className="comment-section">
        <div className="comment-img-container">
          <img src={authUser.image} alt="" />
        </div>
        <input
          onKeyPress={(event) => handleComment(event)}
          name="comment"
          onChange={(event) => handleSetComment(event.target.value)}
          type="text"
          placeholder="Write your comment here"
        />
      </div>
      {post.comments.map((comment) => (
        <CommentBox comment={comment} />
      ))}
    </div>
  );
};

export default memo(Post);
