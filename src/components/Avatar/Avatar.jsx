import React, { useState } from "react";

import "./Avatar.style.css";

import imageArray from "../../assets/imageArray";

const Avatar = (props) => {
  const { heading } = props;

  console.log(imageArray);
  const rows = [];
  for (let i = 0; i < imageArray.length; i++) {
    rows.push(<img src={imageArray[i]} alt="grid" className="grid-img" />);
  }
  return (
    <div className="avatar">
      <h4>{heading}</h4>
      <div className="avatar-grid">{rows}</div>
    </div>
  );
};

export default Avatar;
