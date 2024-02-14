// useState, useRef to enable photo selection
import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./Share.css";

// importing share icons
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const Share = () => {
  //1. we use useState here with setImage function. then we use useState and initial value will be null
  const [image, setImage] = useState(null);
  //2. Making and instance of useRef using a constant imagRef
  const imageRef = useRef();

  //6.there'll be an event that is fired on our hidden input and
  // it is fired by the refernce, event carries the event of image selection
  const onImageChange = (event) => {
    //7.check if the event contains any files and if it does is the image on the 0th index of the file
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]; //8. declaring a variable that carries the image
      //9. set the image in useState with key 'image'
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="Share">
      {/* add profile photo */}
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's happening" />
        {/* adding share options */}
        <div className="shareOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            //10. onClick the imageRef will be clicked and go from steps 3 to 9
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          {/* adding share button */}
          <button className="button ps-button">Share</button>
          {/* 4. after creating the input file we get a choose file option,
           we don't want it so we'll use display: none for the div 
           this will remove the option but we'll still have it's reference
           and we can use it by using onChange (step 5)*/}
          <div style={{ display: "none" }}>
            {/* 3. create a div and input of file type inside it */}
            <input
              type="file"
              name="myImage"
              ref={imageRef} //the reference it uses is imageRef
              onChange={onImageChange} //5. onChange will fire a function onImageChange
            />
          </div>
        </div>

        {/* 11. if image exists, then */}
        {image && (
          <div className="previewImage">
            {/* cross icon and functionality*/}
            <UilTimes onClick={() => setImage(null)} />
            {/* image.image where 1st image is useState and 2nd one is the key */}
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Share;
