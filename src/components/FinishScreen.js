import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import RestartButton from "./RestartButton";

function FinishScreen() {
  const { questions, points, highscore } = useContext(QuizContext);
  const totalPoints = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );

  const perCentage = Math.ceil((points / totalPoints) * 100);

  return (
    <>
      <p className="result">
        🤨 You scored <strong>{points}</strong> out of {totalPoints} (
        {perCentage}
        %)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <RestartButton />
    </>
  );
}

export default FinishScreen;
