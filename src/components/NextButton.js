import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function NextButton() {
  const { dispatch } = useContext(QuizContext);
  return (
    <button onClick={() => dispatch({ type: "next" })} className="btn btn-ui">
      Next
    </button>
  );
}

export default NextButton;
