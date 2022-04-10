import { useState, useEffect } from "react";
import useSound from "use-sound";
import totoro from "../assets/となりのトトロ.mp3";
import bu from "../assets/bubu.wav";
import pinpon from "../assets/maru.wav";

import chibiTotoros from "../assets/syoutotoro.png";

function Trivia({ data, setStop, questionNumber, setQuestionNumber }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [bgmusic] = useSound(totoro);
  const [correctAnswer] = useSound(pinpon);
  const [wrongAnswer] = useSound(bu);

  useEffect(() => {
    // bgmusic();
  }, [bgmusic]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(2000, () => {
      if (a.correct) {
        correctAnswer();
        delay(500, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(500, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className="trivia">
      <div className="q-a">
        <div className="question">
          <p>{question?.question}</p>
          <div className="q-img">
            <img src={chibiTotoros} alt="" />
          </div>
        </div>
        <div className="answers">
          {question?.answers.map((a) => (
            <div
              key={a.key}
              className={selectedAnswer === a ? className : "answer"}
              onClick={() => handleClick(a)}
            >
              {a.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trivia;
