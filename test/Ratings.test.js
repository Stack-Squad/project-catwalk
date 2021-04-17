import { shallow } from 'enzyme';
import React from 'react';

import Ratings from '../client/src/components/Ratings.jsx';

test ("renders Ratings component", () => {
  const wrapper = shallow(<Ratings />);
  expect(wrapper.contains(<div></div>)).toEqual(true);
});