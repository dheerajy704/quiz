import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../api/';
import { Mistakes } from './Mistakes';

const Results = ({ results, quiz }) => {
  console.log({ results });
  const user = JSON.parse(localStorage.getItem('user')) ?? { user: '' };
  const navigate = useNavigate();

  const submitScore = (score) => {
    console.log(score);
    axios.post(
      `${baseUrl}result/`,
      {
        user: user.id,
        quiz_name: quiz,
        score: score,
      },
      {
        headers: {
          authorization: user.token,
          'Content-Type': 'application/json',
        },
      }
    );
    navigate('/home');
  };

  return (
    <div>
      <div className='w-full flex justify-center items-center mt-10'>
        <div>
          <div className='p-10 flex flex-col space-y-5 bg-white rounded drop-shadow-lg min-w-[650px]'>
            <h1 className='mb-6 text-4xl text-center font-semibold text-[#00abae] underline'>
              Correct Answers : {results.scores} out of{' '}
              {results.answers.length}
            </h1>
            <div>
              <div className='flex flex-col space-y-5'>
                {results.answers.map((answer, index) => (
                  <Mistakes
                    key={index}
                    index={index}
                    answer={answer.answer}
                    options={answer.options}
                    title={answer.title}
                  />
                ))}
              </div>
            </div>
            <div>
              <button
                onClick={() => submitScore(results.scores)}
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00abae] hover:bg-[#00abaed5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00abae]'
              >
                Submit Score
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
