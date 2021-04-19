import { shallow } from 'enzyme';
import React from 'react';

import Reviews from '../client/src/components/Reviews.jsx';
import SortOptions from '../client/src/components/SortOptions.jsx';
import ReviewsList from '../client/src/components/ReviewsList.jsx';
import ReviewsButton from '../client/src/components/ReviewsButton.jsx';

test ("renders Reviews component", () => {
  const wrapper = shallow(<Reviews />);
  expect(wrapper.find(SortOptions)).toHaveLength(1);
  expect(wrapper.find(ReviewsList)).toHaveLength(1);
  expect(wrapper.contains(<ReviewsButton />)).toEqual(true);
});