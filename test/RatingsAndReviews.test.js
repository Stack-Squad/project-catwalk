import { shallow } from 'enzyme';
import React from 'react';

import RatingsAndReviews from '../client/src/components/RatingsAndReviews';
import Ratings from '../client/src/components/Ratings';
import Reviews from '../client/src/components/Reviews';
import sampleData from '../helpers/sampleData';

test('renders RatingsAndReviews component', () => {
  const reviewData = sampleData.reviewMetaData;
  const { reviewList } = sampleData;
  const wrapper = shallow(<RatingsAndReviews />);
  expect(wrapper.contains(
    <Ratings reviewData={reviewData} reviewList={reviewList} />,
  )).toEqual(true);
  expect(wrapper.contains(<Reviews />)).toEqual(true);
});

test('renders Ratings component', () => {
  const wrapper = shallow(<RatingsAndReviews />);
  expect(wrapper.find(Ratings)).toHaveLength(1);
});

test('renders Reviews component ', () => {
  const wrapper = shallow(<RatingsAndReviews />);
  expect(wrapper.find(Reviews)).toHaveLength(1);
});
