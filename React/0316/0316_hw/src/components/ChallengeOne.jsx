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
    <div>
      <h2>Challenge 1</h2>
      <div className="msg">
        <img className="ch1" src={imgSrc} alt="" />
      </div>
      <div className="btns">
        <button className="btn" onClick={toLeft}>
          ←
        </button>
        <button className="btn" onClick={toRight}>
          →
        </button>
      </div>
    </div>
  );
}
