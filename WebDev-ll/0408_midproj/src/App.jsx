import { useState, useEffect, useMemo } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";

// import dataJson from "../data.json";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [score, setScore] = useState("0");

  const data = [
    {
      id: 1,
      question: "What type of tree was the big Totoro found in?",
      answers: [
        {
          text: "Just a really big one",
          correct: false,
        },
        {
          text: "Oak",
          correct: false,
        },
        {
          text: "Camphor",
          correct: true,
        },
        {
          text: "Cedar",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What was the totoro Mei was first chasing?",
      answers: [
        {
          text: "Chuu Totoro",
          correct: false,
        },
        {
          text: "Chibi Totoro",
          correct: true,
        },
        {
          text: "King Totoro",
          correct: false,
        },
        {
          text: "Nekobus",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the name of Mei's older sister?",
      answers: [
        {
          text: "Sachiko",
          correct: false,
        },
        {
          text: "Satoko",
          correct: false,
        },
        {
          text: "Satomi",
          correct: false,
        },
        {
          text: "Satsuki",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "How does the family get rid of the Dust Bunnies?",
      answers: [
        {
          text: "Laughing",
          correct: true,
        },
        {
          text: "Planting trees",
          correct: false,
        },
        {
          text: "Cleaning",
          correct: false,
        },
        {
          text: "They let them stay",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What does Granny call the black fuzzy things",
      answers: [
        {
          text: "Spirits",
          correct: false,
        },
        {
          text: "Totoro",
          correct: false,
        },
        {
          text: "Soot Sprites",
          correct: true,
        },
        {
          text: "Dust Bunnies",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What does Granny find at the lake?",
      answers: [
        {
          text: "A hat",
          correct: false,
        },
        {
          text: "A sandal",
          correct: true,
        },
        {
          text: "A dust bunny",
          correct: false,
        },
        {
          text: "A piece of Mei's dress",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "At the bus stop, what does Satsuki give to Totoro?",
      answers: [
        {
          text: "Acorn",
          correct: false,
        },
        {
          text: "Umbrella",
          correct: true,
        },
        {
          text: "Big leaf",
          correct: false,
        },
        {
          text: "Hat",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What animal is the bus?",
      answers: [
        {
          text: "Owl",
          correct: false,
        },
        {
          text: "Dog",
          correct: false,
        },
        {
          text: "Cat",
          correct: true,
        },
        {
          text: "Bat",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is their boy neighbour's name?",
      answers: [
        {
          text: "Ken",
          correct: false,
        },
        {
          text: "Kanta",
          correct: true,
        },
        {
          text: "Kouta",
          correct: false,
        },
        {
          text: "Kouji",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Totoro appeared as a cameo in which film?",
      answers: [
        {
          text: "Toy Story 1",
          correct: false,
        },
        {
          text: "Toy Story 2",
          correct: false,
        },
        {
          text: "Toy Story 3",
          correct: true,
        },
        {
          text: "Toy Story 4",
          correct: false,
        },
      ],
    },
  ];
  const pyramid = useMemo(
    () =>
      [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setScore(pyramid.find((m) => m.id === questionNumber).amount);
  }, [pyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            <div className="wrapper">
              {stop ? (
                <div className="result">
                  <h1 className="result-score">Your score: {score}</h1>
                  <button className="result-back-btn">back</button>
                </div>
              ) : (
                <>
                  <div className="top">
                    <div className="timer">
                      <Timer
                        setStop={setStop}
                        questionNumber={questionNumber}
                      />
                    </div>
                  </div>
                  <div className="bottom">
                    <Trivia
                      data={data}
                      setStop={setStop}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="score-board">
            <div className="greet">
              <div className="border"></div>
              <div className="border2"></div>
              Welcome
              <p>{username}</p>
            </div>
            <ul className="scores">
              <li className="map-goal">GOAL</li>
              {pyramid.map((m) => (
                <li
                  className={questionNumber === m.id ? "score active" : "score"}
                >
                  <span className="score-num">{m.id}</span>
                </li>
              ))}
              <li className="map-start">START</li>
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
