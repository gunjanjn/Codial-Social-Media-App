import React from "react";
import "./ProfileLeft.css";
import LogoSearch from "../LogoSearch/LogoSearch";
import InfoCard from "../infoCard/InfoCard";
import FollowersCard from "../followersCard/FollowersCard";

const ProfileLeft = () => {
  return (
    <div className="HomeLeft">
      {/*should apply css of HomeLeft.css without having to make ProfileLeft.css file but not working, why?*/}
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
