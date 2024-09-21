import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function FinishButton() {
  const { dispatch } = useContext(QuizContext);
  return (
    <button onClick={() => dispatch({ type: "finish" })} className="btn btn-ui">
      Finish quiz
    </button>
  );
}

export default FinishButton;
