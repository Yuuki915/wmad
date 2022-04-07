import { useRef } from "react";

import logo from "../assets/totoro-logo.png";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <div className="start-logo-img">
        <img src={logo} alt="" />
        <div className="start-quiz">QUIZ</div>
      </div>
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <button className="startBtn" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
