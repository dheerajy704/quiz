import {
  faCheckCircle,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';

export const Mistakes = ({ title, answer, index, options }) => {
  return (
    <div>
      <h1 className='text-2xl font-semibold text-[#00abae]'>
        {`${index + 1}. ${title}`} ?
      </h1>
      <RadioGroup className='px-5 pt-4'>
        {options.map((option) => (
          <RadioGroup.Option
            value={answer}
            key={option.id}
            className={classNames(
              'relative max-w-6xl border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6  focus:outline-none  border-[#00abae21] z-10 text-gray-600 rounded',
              {
                'bg-red-100':
                  option.answer_text === answer.answer_text && !answer.is_right,
                'bg-[#00abae21]': option.is_right,
                'border-gray-200': option.answer_text !== answer.answer_text,
              }
            )}
          >
            {() => (
              <div className='flex items-center space-x-10'>
                <span
                  className={classNames(
                    'h-4 w-4 rounded-full border flex items-center justify-center  ',
                    {
                      'bg-red-400  ':
                        option.answer_text === answer.answer_text &&
                        !answer.is_right,
                      'bg-[#00abae] ': option.is_right,
                    }
                  )}
                  aria-hidden='true'
                >
                  <span className='rounded-full bg-white w-1.5 h-1.5' />
                </span>
                <RadioGroup.Label className={'font-semibold'}>
                  {option.answer_text}
                </RadioGroup.Label>
                <div className='flex-1 flex justify-end'>
                  {option.answer_text === answer.answer_text &&
                    answer.is_right && (
                      <RadioGroup.Description>
                        <FontAwesomeIcon icon={faCheckCircle} color='#00abae' />
                      </RadioGroup.Description>
                    )}
                  {option.answer_text === answer.answer_text &&
                    !answer.is_right && (
                      <RadioGroup.Description>
                        <FontAwesomeIcon
                          icon={faXmarkCircle}
                          className='text-red-400'
                        />
                      </RadioGroup.Description>
                    )}
                  {option.answer_text !== answer.answer_text &&
                    option.is_right && (
                      <RadioGroup.Description>
                        <span className='text-[#00abae] font-semibold underline'>
                          This is the correct answer
                        </span>
                      </RadioGroup.Description>
                    )}
                </div>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  );
};
