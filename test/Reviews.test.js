import { shallow } from 'enzyme';
import React from 'react';

import Reviews from '../client/src/components/Reviews.jsx';

test ("renders Reviews component", () => {
  const wrapper = shallow(<Reviews />);
  console.log(wrapper.debug());
  expect(wrapper.contains(<h1>Reviews Component</h1>)).toEqual(true);
});