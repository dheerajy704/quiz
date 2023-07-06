import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { baseUrl } from './api';
import { Categories, QuestionsList, Results } from './Components';
import PageNotFound from './Components/PageNotFound';
import ForgotPassoword from './pages/ForgotPassword';
import Home from './pages/Home';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import ProtectedRoute from './route/ProtectedRoute';

function App() {
  const [quiz, selectedQuiz] = useState();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState();

  /* clear all state */

  useEffect(() => {
    setAnswers([]);
  }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get(`${baseUrl}quiz?quiz=${quiz}`);
      setQuestions(response.data);
    };
    if (quiz) fetchQuestions();
  }, [quiz]);

  const onClear = () => {
    setAnswers([]);
    setResults([]);
  };

  return (
    <Routes>
      <Route
        path='/home'
        element={
          <ProtectedRoute>
            <Home onClear={onClear} />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<Categories quiz={quiz} selectedQuiz={selectedQuiz} />}
        />
        <Route
          path='questions'
          element={
            <QuestionsList
              answers={answers}
              questions={questions}
              setAnswers={setAnswers}
              setResults={setResults}
            />
          }
        />
        <Route
          path='results'
          element={<Results results={results} quiz={quiz} />}
        />
      </Route>
      <Route path='/' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forgotpassword' element={<ForgotPassoword />} />
      <Route path='*' element={<PageNotFound />} />

      <Route />
    </Routes>
  );
}

export default App;
