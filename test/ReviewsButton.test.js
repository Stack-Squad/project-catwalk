import { shallow } from 'enzyme';
import React from 'react';

import ReviewsButton from '../client/src/components/ReviewsButton.jsx';

test ("renders ReviewsButton component", () => {
  const wrapper = shallow(<ReviewsButton />);
  expect(wrapper.contains(<div>Reviews Button</div>)).toEqual(true);
});