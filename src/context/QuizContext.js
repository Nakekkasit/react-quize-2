import { createContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],

  //status: laading, ready, error, active, finish
  status: "loading",
  questionIndex: 0,
  answer: null,
  points: 0,
  progress: 0,
  highscore: 0,
};

const API_URL = "https://nakekkasit.github.io/react-quiz-data/questions.json";

function reducer(state, action) {
  switch (action.type) {
    case "recieveData":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const currentQuestion = state.questions[state.questionIndex];

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === currentQuestion.correctOption
            ? state.points + currentQuestion.points
            : state.points,
        progress: state.progress + 1,
      };
    case "next":
      return { ...state, questionIndex: state.questionIndex + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finish",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...state,
        status: "ready",
        questionIndex: 0,
        answer: null,
        points: 0,
        progress: 0,
      };
    default:
      throw new Error("unkown action");
  }
}

function QuizProvider({ children }) {
  const [
    { questions, status, questionIndex, answer, points, progress, highscore },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        // const res = await fetch("http://localhost:9000/questions");
        const res = await fetch(API_URL);
        console.log(res);
        const questions = await res.json();
        console.log(questions);
        dispatch({ type: "recieveData", payload: questions.questions });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }

    fetchQuestions();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        questionIndex,
        answer,
        points,
        progress,
        highscore,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizProvider, QuizContext };
