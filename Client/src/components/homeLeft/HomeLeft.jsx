import React from "react";
import "./HomeLeft.css";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../profileCard/ProfileCard";
import FollowersCard from "../followersCard/FollowersCard";

const HomeLeft = () => {
  return (
    <div className="HomeLeft">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default HomeLeft;
