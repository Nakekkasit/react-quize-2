import { useContext } from "react";
import Header from "./Header";
import "../index.css";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import { QuizContext } from "../context/QuizContext";
import Question from "./Question";
import FinishButton from "./FinishButton";
import Progress from "./Progress";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";

function App() {
  const { questions, questionIndex, status, answer } = useContext(QuizContext);
  const hasNextQuestion = questions[questionIndex + 1];

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            {answer !== null &&
              (hasNextQuestion ? <NextButton /> : <FinishButton />)}
          </>
        )}
        {status === "finish" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
