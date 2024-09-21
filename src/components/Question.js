import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Option from "./Option";

function Question() {
  const { questions, questionIndex } = useContext(QuizContext);
  const question = questions[questionIndex];

  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <Option key={option} question={question} index={index}>
            {option}
          </Option>
        ))}
      </div>
    </div>
  );
}

export default Question;
