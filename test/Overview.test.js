import { shallow } from 'enzyme';
import React from 'react';

import Overview from '../client/src/components/Overview.jsx';
import OverviewImgGal from '../client/src/components/OverviewImgGal.jsx';

test ("renders Overview Image Gallery component", () => {
  const wrapper = shallow(<Overview />);
  expect(wrapper.contains(<OverviewImgGal />)).toEqual(true);
});