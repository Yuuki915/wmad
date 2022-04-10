import { useState, useEffect, useMemo } from "react";
import "./Totoro.css";
import "./TotoroMo.css";
// import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";

import dataJson from "./data.json";

export default function Totoro() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [score, setScore] = useState("0");

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
      setScore(pyramid.find((m) => m.id === questionNumber - 1).id);
  }, [pyramid, questionNumber]);

  return (
    <div className="totoro">
      {username ? (
        <>
          <div className="main">
            <div className="wrapper">
              {stop ? (
                <div className="result">
                  <h1 className="result-score">Your score : {score} / 10</h1>
                  <button className="result-back-btn">
                    <a href="/">HOME</a>
                  </button>
                </div>
              ) : (
                <>
                  <div className="top">
                    <div className="timer">
                      {/* <Timer
                        setStop={setStop}
                        questionNumber={questionNumber}
                      /> */}
                    </div>
                  </div>
                  {questionNumber > 10 ? (
                    <div className="yay">
                      <p>Congratulations!!</p>
                      <p>{score} / 10</p>
                      <button className="result-back-btn">
                        <a href="/">HOME</a>
                      </button>
                    </div>
                  ) : (
                    <div className="bottom">
                      <Trivia
                        data={dataJson}
                        setStop={setStop}
                        questionNumber={questionNumber}
                        setQuestionNumber={setQuestionNumber}
                      />
                    </div>
                  )}
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
              {questionNumber > 10 ? (
                <li className="after-goal">
                  GOAL
                  <div className="goal-bg-container">
                    <li className="goal-bg"></li>
                  </div>
                </li>
              ) : (
                <li className="map-goal">GOAL</li>
              )}

              {pyramid.map((m) => (
                <li
                  key={m.id}
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
