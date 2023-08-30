import { useSelector, useDispatch } from "react-redux";
import { restartQuiz } from "../features/questionsSlice";
import { useNavigate } from "react-router-dom";

const QuizDone = () => {
  const navigate = useNavigate();
  const { data, activeQuestion, points, hintsUsed, hintsMax } = useSelector(
    (store) => store.question
  );
  const dispatch = useDispatch();
  const restartHandler = () => {
    dispatch(restartQuiz());
  }
  const endHandler = () => {
    navigate('/')
  }
  return (
    <div>
      {points > 6 ? (
        <h2>
          Congratulations You have got 
          <span className="points"> {points} Points.</span>
        </h2>
      ) : (
        <h2>
          not so much Congratulations, You have got <span className="points">{points}   Points </span>
        </h2>
      )}
      <h3>
        You can either restart the quiz with this button. or proceed with the
        end.
      </h3>
      <button onClick={restartHandler}>Restart</button>
      <br />
      <button onClick={endHandler}>End the Quiz</button>
    </div>
  );
};

export default QuizDone;
