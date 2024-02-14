import React from "react";
import "./Posts.css";

import { PostsData } from "../../Data/PostsData";
import Post from "../post/Post";

const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => {
        return <Post data={post} id={id} />; //pass the data and id of all the posts to Post
      })}
    </div>
  );
};

export default Posts;
