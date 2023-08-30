import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  nextQuestionSwitch,
  checkForCorrectAnswers,
  useHint,
} from "../features/questionsSlice";
import { HintText, QuizDone } from "../components";

const Questions = () => {
  const {
    data,
    activeQuestion,
    points,
    timePerQuestion,
    questionsAmount,
    condition,
    hintsUsed,
    hintsMax,
  } = useSelector((store) => store.question);
  const [timeGiven, setTimeGiven] = useState(timePerQuestion);
  const [hintActivated,setHintActivated] = useState(false);
  const dispatch = useDispatch();
   useEffect(() => {
     let timer;
     if (condition) {
       timer = setInterval(() => {
         setTimeGiven((prevTime) => prevTime - 1);
       }, 1000);
     }
     return () => {
       clearInterval(timer);
     };
   }, [condition]);
  if (activeQuestion === questionsAmount) {
    return <QuizDone />;
  }
  if (timeGiven === 0) {
    dispatch(nextQuestionSwitch());
    setTimeGiven(timePerQuestion);
    setHintActivated(false)
  }
  const { question, answers, correctAnswer,hint } = data[activeQuestion];
  const clickHandler = (e) => {
    let pointChange = points;
    setTimeGiven(timePerQuestion);
    if (e.target.dataset.id === correctAnswer) {
      console.log("right");
      pointChange++;
    }
    setHintActivated(false)
    dispatch(checkForCorrectAnswers(pointChange));
    dispatch(nextQuestionSwitch());
  };
  const hintHandler = () => {
    let hintUsage = hintsUsed;
    if(hintUsage < hintsMax){
      hintUsage++;
      dispatch(useHint(hintUsage)); 
      setHintActivated(true);    
      return; 
    }

  }
  const availableHints = hintsMax;
  return (
    <>
      <h3>Hints Available : {hintsMax}</h3>
      <h3>Hints Used : {hintsUsed}</h3>
      <h4>Use the Hint</h4>
      <button disabled={hintActivated} type="button" onClick={hintHandler}>
        Hint
      </button>
      <h3>Points:{points}</h3>
      <h3>Time:{timeGiven}</h3>
      <div className="quiz-container">
        <>
          <div className="question-box">
            <h2>{question}</h2>
          </div>
          {answers.map((answer, index) => {
            return (
              <div className="answer-box" key={index}>
                <button data-id={answer} onClick={clickHandler}>
                  {answer}
                </button>
              </div>
            );
          })}
          {hintActivated && <HintText hint={hint} />}
        </>
        {hintsUsed === hintsMax ? (
          <p>
            You are all out of <strong>Hints</strong>
          </p>
        ) : null}
      </div>
    </>
  );
};

export default Questions;
