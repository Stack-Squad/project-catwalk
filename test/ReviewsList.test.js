import { shallow } from 'enzyme';
import React from 'react';

import ReviewsList from '../client/src/components/ReviewsList.jsx';
import Review from '../client/src/components/Review.jsx';

test ("renders ReviewsList component", () => {
  const wrapper = shallow(<ReviewsList />);
  expect(wrapper.contains(<Review />)).toEqual(true);
  expect(wrapper.find(Review)).toHaveLength(2);
});