import { OptionsBtn } from './FeedbackOption.styled';

import { WrapperOptionsBtn } from './FeedbackOption.styled';


export const FeedbackOptions = ({ title, options, onLeaveFeedback }) => {
  const nameOfBtns = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
  };

  return (
    <div>
      <WrapperOptionsBtn>
        {options.map((option, id) => (
          <OptionsBtn
            key={id}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {nameOfBtns[option]}
          </OptionsBtn>
        ))}
      </WrapperOptionsBtn>
    </div>
  );
};
