const QuizList = ({ list, category, quiz, onChange }) => {
  return (
    <div>
      <div>
        <label className='text-2xl  text-[#00abae] font-semibold'>
          Set of Quiz for {category.name}
        </label>
        <p className='text-sm leading-5 text-gray-500'>
          Please select one of the quiz list below:
        </p>
        <fieldset className='mt-4'>
          <legend className='sr-only'>Notification method</legend>
          <div className='space-y-4'>
            {list.length > 0 ? (
              list.map((l) => (
                <div key={l.id} className='flex items-center'>
                  <input
                    id={l.id}
                    name='quizlist'
                    type='radio'
                    className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                    value={quiz}
                    checked={l.id === quiz}
                    onChange={() => onChange(l.id)}
                  />
                  <label
                    htmlFor={l.id}
                    className='ml-3 block text-sm font-medium text-gray-700'
                  >
                    {l.title}
                  </label>
                </div>
              ))
            ) : (
              <div>No Quiz List yet</div>
            )}
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default QuizList;
