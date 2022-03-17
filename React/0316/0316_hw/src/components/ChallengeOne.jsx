import React, { useState } from "react";
import "../App.css";
import lookLeft from "../assets/look-left.jpeg";
import lookRight from "../assets/look-right.jpeg";

export default function ChallengeOne() {
  const [imgSrc, setImgSrc] = useState(lookLeft);

  const toLeft = () => {
    setImgSrc(lookLeft);
  };

  const toRight = () => {
    setImgSrc(lookRight);
  };

  return (
    <div className="one">
      <h2>Challenge 1</h2>
      <div className="img-container">
        <img src={imgSrc} alt="" />
      </div>
      <div className="btns">
        <button className="btn to-left" onClick={toLeft}>
          ←
        </button>
        <button className="btn to-right" onClick={toRight}>
          →
        </button>
      </div>
    </div>
  );
}
