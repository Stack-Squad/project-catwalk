import { shallow } from 'enzyme';
import React from 'react';

import SortOptions from '../client/src/components/SortOptions';

test('renders SortOptions component', () => {
  const wrapper = shallow(<SortOptions reviewCount={[2, 5]} />);
  expect(wrapper.find('div')).toHaveLength(2);
});
