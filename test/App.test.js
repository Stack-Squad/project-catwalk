import { shallow } from 'enzyme';
import React from 'react';

import App from '../client/src/App.jsx';
import Banner from '../client/src/components/Banner.jsx';
import RatingsAndReviews from '../client/src/components/RatingsAndReviews.jsx';
import Overview from '../client/src/components/Overview.jsx';
import QuestionsAnswers from '../client/src/components/QnA.jsx';
import RelatedItems from '../client/src/components/RelatedItems.jsx';

test ("renders App component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Banner />)).toEqual(true);
  expect(wrapper.contains(<Overview />)).toEqual(false);
  expect(wrapper.contains(<RatingsAndReviews />)).toEqual(true);
  expect(wrapper.contains(<QuestionsAnswers />)).toEqual(false);
  expect(wrapper.contains(<RelatedItems />)).toEqual(false);
});

test("renders RatingsAndReviews component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(RatingsAndReviews)).toHaveLength(1);
});

test("renders Banner component ", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Banner)).toHaveLength(1);
});