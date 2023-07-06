import { useNavigate } from 'react-router-dom';
import { Question } from './Question';

const QuestionsList = ({ questions, answers, setAnswers, setResults }) => {
  const navigate = useNavigate();

  if (questions.length < 0) {
    alert('No available questions yet');
    navigate('/home', { replace: true });
  }

  const handleSaveResult = () => {
    console.log(questions.length, answers.length);
    if (questions.length !== answers.length)
      alert('Please answer all questions');
    else {
      const scores = answers.filter((answer) => answer.answer.is_right).length;
      //const mistakes = answers.filter((answer) => !answer.answer.is_right);

      setResults({ scores, answers });
      navigate('/home/results', { replace: true, relative: true });
      setAnswers([]);
    }
  };

  return (
    <div className='flex justify-center mt-6'>
      <div className='p-10 flex flex-col space-y-5 bg-white rounded drop-shadow-lg min-w-[650px]'>
        {questions.map((question, key) => (
          <Question
            question={question}
            key={key}
            index={key}
            answers={answers}
            setAnswers={setAnswers}
          />
        ))}
        <div className='flex justify-center pt-5'>
          <button
            onClick={handleSaveResult}
            className='flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#00abae] hover:bg-[#00abaed5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00abae]'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsList;
