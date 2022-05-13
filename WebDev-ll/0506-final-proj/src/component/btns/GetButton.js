import React from "react";

export const GetButton = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
