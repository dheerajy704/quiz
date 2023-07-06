import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../../api';

const CategoriesOption = ({ category, onChange, selectedQuiz }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(`${baseUrl}category`);
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <label className='text-2xl  text-[#00abae] font-semibold '>
        Quiz Categories
      </label>
      <p className='text-sm leading-5 text-gray-500'>
        Please select one of the categories below:
      </p>
      <fieldset className='mt-4'>
        <legend className='sr-only'>Notification method</legend>
        <div className='space-y-4'>
          {categories.length > 0 &&
            categories.map((categories) => (
              <div key={categories.id} className='flex items-center'>
                <input
                  id={categories.id}
                  name='notification-method'
                  type='radio'
                  className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                  value={category.name}
                  checked={category.id === categories.id}
                  onChange={() => {
                    onChange(categories);
                    selectedQuiz();
                  }}
                />
                <label
                  htmlFor={categories.id}
                  className='ml-3 block text-sm font-medium text-gray-700'
                >
                  {categories.name}
                </label>
              </div>
            ))}
        </div>
      </fieldset>
    </div>
  );
};

export default CategoriesOption;
