import React, { useEffect, useState } from "react";
import Post from "../../components/feed/post/Post";
import NewPost from "../../components/feed/newPost/NewPost";
import PostsService from "../../services/postService";
import { useSelector } from "react-redux";
import "./Timeline.css";

const postsService = new PostsService();
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    async function handleGetPosts() {
      const { data } = await postsService.getAll(user.id);
      setPosts(data);
    }
    handleGetPosts();
  }, [user.id]);

  const handleAddPost = (post) => {
    const newPosts = [post, ...posts];
    setPosts(newPosts);
  };
  return (
    <>
      <div className="feed-container">
        <NewPost handleAddPost={handleAddPost} />
        {posts && posts.map((post) => <Post key={post.id} post={post} user={user} />)}
      </div>
    </>
  );
};

export default Feed;
