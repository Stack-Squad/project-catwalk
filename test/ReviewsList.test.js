import { shallow } from 'enzyme';
import React from 'react';

import ReviewsList from '../client/src/components/ReviewsList';
import Review from '../client/src/components/Review';
import sampleData from '../helpers/sampleData';

test('renders ReviewsList component', () => {
  const reviews = sampleData.reviewList.results;
  const wrapper = shallow(<ReviewsList reviews={reviews} />);
  expect(wrapper.contains(<Review key={reviews[0].review_id} review={reviews[0]} />)).toEqual(true);
  expect(wrapper.find(Review)).toHaveLength(5);
});
