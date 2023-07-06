import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../api';
import CategoriesOption from './CategoriesOption';
import QuizList from './QuizList';

const Categories = ({ quiz, selectedQuiz }) => {
  const [category, setCategory] = useState({});
  const [quizlist, setQuizlist] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchQuizlist = async () => {
      if (category?.id) {
        const response = await axios.get(
          `${baseUrl}quizlist?category=${category.id}`
        );
        setQuizlist(response.data);
      }
    };
    fetchQuizlist();
  }, [category.id]);

  const handleClick = () => {
    if (Object.keys(category).length <= 0) {
      alert('Please select quiz category');
    } else if (quizlist.length <= 0) {
      alert('Please select other category. There is no quiz set available');
    } else if (!quiz) {
      alert('Please selecte Set of Quiz');
    } else {
      navigate('questions', { replace: true });
    }
  };

  return (
    <div className='w-full flex justify-center items-center mt-40'>
      <div>
        <div className='p-10 flex flex-col space-y-5 bg-white rounded drop-shadow-lg min-w-[650px]'>
          <div className='flex space-x-5'>
            <CategoriesOption
              category={category}
              onChange={setCategory}
              selectedQuiz={selectedQuiz}
            />

            {Object.keys(category).length > 0 && (
              <QuizList
                quiz={quiz}
                list={quizlist}
                category={category}
                onChange={selectedQuiz}
              />
            )}
          </div>
          <button
            onClick={handleClick}
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00abae] hover:bg-[#00abaed5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00abae]'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
