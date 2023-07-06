import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { useState } from 'react';

export const Question = ({ question, index, setAnswers, answers }) => {
  const { title, answer: options } = question;
  const [selected, setSelected] = useState(options);

  const handleChange = (val) => {
    setSelected(val);
    setAnswers((prev) => {
      let isAnsweredQuestion = prev.some((p) => p.title === title);
      if (!isAnsweredQuestion)
        return [...prev, { title, answer: val, options }];
      else {
        return prev.map((p) =>
          p.title === title ? { ...p, answer: val, options } : p
        );
      }
    });
  };

  return (
    <div>
      {/* 1. Question
         2. Radion button */}
      <h1 className='text-2xl font-semibold text-[#00abae]'>
        {`${index + 1}. ${title}`} ?
      </h1>
      <RadioGroup
        className='px-5 pt-4'
        value={selected}
        onChange={(val) => handleChange(val)}
      >
        {options.length > 0 ? (
          options.map((option, optionIdx) => (
            <RadioGroup.Option
              key={option.id}
              value={option}
              className={({ checked }) =>
                classNames(
                  optionIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                  optionIdx === options.length - 1
                    ? 'rounded-bl-md rounded-br-md'
                    : '',
                  checked
                    ? 'bg-[#00abae21] border-[#00abae21] z-10 text-gray-600'
                    : 'border-gray-200',
                  'relative max-w-6xl border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6  focus:outline-none'
                )
              }
            >
              {({ checked, active }) => (
                <div className='  flex items-center space-x-10'>
                  <span
                    className={classNames(
                      checked
                        ? 'bg-[#00abae] border-transparent'
                        : 'bg-white border-gray-300',
                      active ? 'ring-2 ring-offset-2 ring-' : '',
                      'h-4 w-4 rounded-full border flex items-center justify-center'
                    )}
                    aria-hidden='true'
                  >
                    <span className='rounded-full bg-white w-1.5 h-1.5' />
                  </span>
                  <RadioGroup.Label className={'font-semibold'}>
                    {option.answer_text}
                  </RadioGroup.Label>
                </div>
              )}
            </RadioGroup.Option>
          ))
        ) : (
          <h1 className='text-2xl font-semibold text-[#00abae]'>
            {`${index + 1}. ${title}`} ?
          </h1>
        )}
      </RadioGroup>
    </div>
  );
};
