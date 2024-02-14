import React from "react";
import "./PostSide.css";

import Share from "../share/Share";
import Posts from "../posts/Posts";

const PostSide = () => {
  return (
    <div className="PostSide">
      <Share />
      <Posts />
    </div>
  );
};

export default PostSide;
