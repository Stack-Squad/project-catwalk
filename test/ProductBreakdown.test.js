import { shallow } from 'enzyme';
import React from 'react';

import ProductBreakdown from '../client/src/components/ProductBreakdown.jsx';

test ("renders Ratings component", () => {
  const wrapper = shallow(<ProductBreakdown />);
  expect(wrapper.contains(<p>product breakdown</p>)).toEqual(true);
});