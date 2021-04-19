import { shallow } from 'enzyme';
import React from 'react';

import RatingsBreakdown from '../client/src/components/RatingsBreakdown.jsx';

test ("renders RatingsBreakdowm component", () => {
  const wrapper = shallow(<RatingsBreakdown />);
  expect(wrapper.contains(<p>ratings breakdown</p>)).toEqual(true);
});