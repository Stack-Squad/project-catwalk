import { shallow } from 'enzyme';
import React from 'react';

import SortOptions from '../client/src/components/SortOptions.jsx';

test ("renders SortOptions component", () => {
  const wrapper = shallow(<SortOptions />);
  expect(wrapper.find('div')).toHaveLength(1);
});