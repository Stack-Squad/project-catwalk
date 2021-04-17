import { shallow } from 'enzyme';
import React from 'react';

import ReviewsList from '../client/src/components/ReviewsList.jsx';

test ("renders ReviewsList component", () => {
  const wrapper = shallow(<ReviewsList />);
  expect(wrapper.contains(<div>Reviews List</div>)).toEqual(true);
});