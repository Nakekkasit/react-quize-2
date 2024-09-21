import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function RestartButton() {
  const { dispatch } = useContext(QuizContext);
  return (
    <button
      onClick={() => dispatch({ type: "restart" })}
      className="btn btn-ui"
    >
      Restart quiz
    </button>
  );
}

export default RestartButton;
