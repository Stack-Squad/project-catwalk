import { shallow } from 'enzyme';
import React from 'react';

import RatingsAndReviews from '../client/src/components/RatingsAndReviews.jsx';
import Ratings from '../client/src/components/Ratings.jsx';
import Reviews from '../client/src/components/Reviews.jsx';
import sampleData from '../helpers/sampleData.js';

test ("renders RatingsAndReviews component", () => {
  const reviewData = sampleData.reviewMetaData;
  const wrapper = shallow(<RatingsAndReviews />);
  expect(wrapper.contains(<Ratings reviewData={reviewData}/>)).toEqual(true);
  expect(wrapper.contains(<Reviews />)).toEqual(true);
});

test("renders Ratings component", () => {
  const wrapper = shallow(<RatingsAndReviews />);
  expect(wrapper.find(Ratings)).toHaveLength(1);
});

test("renders Reviews component ", () => {
  const wrapper = shallow(<RatingsAndReviews />);
  expect(wrapper.find(Reviews)).toHaveLength(1);
});