import { shallow } from 'enzyme';
import React from 'react';

import Ratings from '../client/src/components/Ratings.jsx';
import ProductBreakdown from '../client/src/components/ProductBreakdown.jsx';
import RatingsBreakdown from '../client/src/components/RatingsBreakdown.jsx';

test ("renders Ratings component", () => {
  const wrapper = shallow(<Ratings />);
  expect(wrapper.contains(<RatingsBreakdown />)).toEqual(true);
  expect(wrapper.contains(<ProductBreakdown />)).toEqual(true);
});