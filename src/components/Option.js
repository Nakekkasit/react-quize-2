import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function Option({ children, question, index }) {
  const { dispatch, answer } = useContext(QuizContext);
  const isCorrect = index === question.correctOption;

  return (
    <button
      className={`btn btn-option ${answer === index ? "answer" : ""} ${
        answer !== null ? (isCorrect ? "correct" : "wrong") : ""
      }`}
      onClick={() => dispatch({ type: "newAnswer", payload: index })}
      disabled={answer !== null}
    >
      {children}
    </button>
  );
}

export default Option;
