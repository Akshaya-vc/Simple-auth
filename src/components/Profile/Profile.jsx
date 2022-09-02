import React, { useState } from "react";

import "./Profile.style.css";

import imageArray from "../../assets/imageArray";

const Profile = (props) => {
  const { heading, id, name } = props;

  console.log(imageArray);
  const rows = [];
  for (let i = 0; i < imageArray.length; i++) {
    rows.push(<img src={imageArray[i]} alt="grid" className="grid-img" />);
  }
  return (
    <div className="avatar">
      <h4>{heading}</h4>
      <img src={imageArray[id]} alt="grid" className="grid-img" />
      <h4>{name}</h4>
      <p>Your password is strong 💪</p>
    </div>
  );
};

export default Profile;
