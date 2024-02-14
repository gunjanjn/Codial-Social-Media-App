import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = false; //used in line 35 ?help?
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Frank Ocean</span>
        <span>Frontend Developer</span>
      </div>

      <div className="followStatus">
        <hr /> {/*predefined tag for horizontal line*/}
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Following</span>
          </div>
          <div className="vl"></div> {/*vertical line, no predefined tag*/}
          {/**/}
          <div className="follow">
            <span>111</span>
            <span>Followers</span>
          </div>
          {/* if ProfilePage is true then it should return a jsx */}
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr /> {/*bottom horizontal line*/}
      </div>
      {/* if ProfilePage true then return nothing, else return 'My Profile' */}
      {ProfilePage ? "" : <span>My Profile</span>}
      {/* <span>My Profile</span> */}
    </div>
  );
};

export default ProfileCard;
