import { shallow } from 'enzyme';
import React from 'react';

import Reviews from '../client/src/components/Reviews';
import SortOptions from '../client/src/components/SortOptions';
import ReviewsList from '../client/src/components/ReviewsList';
import ReviewsButton from '../client/src/components/ReviewsButton';

test('renders Reviews component', () => {
  const wrapper = shallow(<Reviews />);
  expect(wrapper.find(SortOptions)).toHaveLength(1);
  expect(wrapper.find(ReviewsList)).toHaveLength(1);
  expect(wrapper.find(ReviewsButton)).toHaveLength(1);
});
