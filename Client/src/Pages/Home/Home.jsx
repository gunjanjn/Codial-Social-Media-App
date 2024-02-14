import React from "react";
import "./Home.css";
import HomeLeft from "../../components/homeLeft/HomeLeft";
import PostSide from "../../components/postSide/PostSide";
import RightSide from "../../components/rightSide/RightSide";

const Home = () => {
  return (
    <div className="Home">
      <HomeLeft />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
