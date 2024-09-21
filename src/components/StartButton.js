import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function StartButton() {
  const { dispatch } = useContext(QuizContext);

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "start" })}>
      Let's start
    </button>
  );
}

export default StartButton;
