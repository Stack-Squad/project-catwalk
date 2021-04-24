import { shallow } from 'enzyme';
import React, { useState } from 'react';

import RatingsAndReviews from '../client/src/components/RatingsAndReviews';
import Ratings from '../client/src/components/Ratings';
import Reviews from '../client/src/components/Reviews';
import sampleData from '../helpers/sampleData';

// test('renders RatingsAndReviews component', () => {
//   const reviewData = sampleData.reviewMetaData;
//   const reviewList = sampleData.reviewList.results;
//   const wrapper = shallow(<RatingsAndReviews productId="" />);
//   expect(wrapper.contains(<Reviews reviewsList={reviewList} />)).toEqual(true);
// });

test('renders Ratings component', () => {
  const wrapper = shallow(<RatingsAndReviews />);
  expect(wrapper.find(Ratings)).toHaveLength(1);
});

test('renders h1 element', () => {
  const wrapper = shallow(<RatingsAndReviews />);
  expect(wrapper.find('h1')).toHaveLength(1);
});

test('renders Reviews component ', () => {
  const wrapper = shallow(<RatingsAndReviews />);
  expect(wrapper.find(Reviews)).toHaveLength(1);
});

// TODO: Test useEffect.
