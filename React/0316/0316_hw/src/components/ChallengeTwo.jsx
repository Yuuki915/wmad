import React, { useState } from "react";

export default function ChallengeTwo() {
  const [students, setStudents] = useState();
  const studentList = [
    "Randall Malfoy",
    "Kvothe Black",
    "Chun Zorander",
    "Leomund Ridcully",
    "Rary Stibbons",
    "Gandalf Dresden",
    "Zeddicus Doom",
  ];
  const randomize = () => {
    studentList.sort(() => Math.random() - 0.5);
    setStudents(studentList.map((student, id) => <li key={id}>{student}</li>));
  };

  return (
    <div className="two">
      <h2>Challenge 2</h2>
      <div className="arr-box">{students}</div>
      <button className="btn-two" onClick={randomize}>
        Randomize
      </button>
    </div>
  );
}
