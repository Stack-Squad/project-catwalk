import { shallow } from 'enzyme';
import React from 'react';

import QnA from '../client/src/components/QnA.jsx';
import Answer from '../client/src/components/QnAComponents/Answer.jsx';
import Question from '../client/src/components/QnAComponents/Question.jsx';
import Questions from '../client/src/components/QnAComponents/Questions.jsx';

test ('renders QnA component', () => {
  const wrapper = shallow(<QnA />);
  expect(wrapper.find(Questions)).toHaveLength(1);
});

test ('should render 4 or less questions', () => {
  const wrapper = shallow(<Questions />);
  expect(wrapper.find(Question).length).toBeLessThanOrEqual(4);
});