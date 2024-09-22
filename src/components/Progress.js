import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function Progress() {
  const { questions, points, questionIndex, progress } =
    useContext(QuizContext);
  console.log(questions);
  const numQuestions = questions.length;
  const totalPoints = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );

  return (
    <header className="progress">
      <progress max={numQuestions} value={progress}></progress>
      <p>
        Question<strong> {questionIndex + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
