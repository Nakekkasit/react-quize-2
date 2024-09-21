import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import StartButton from "./StartButton";

function StartScreen() {
  const { questions } = useContext(QuizContext);

  const numsQuestions = questions.length;

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numsQuestions} questions to test your React mastery</h3>
      <StartButton />
    </div>
  );
}

export default StartScreen;
