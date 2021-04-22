import { shallow } from 'enzyme';
import React from 'react';

import Overview from '../client/src/components/Overview';
import OverviewImgGal from '../client/src/components/OverviewComponents/OverviewImgGal';

import sampleData from '../helpers/sampleData';

test('renders Overview Image Gallery component', () => {
  const wrapper = shallow(<Overview />);
  expect(wrapper.find(OverviewImgGal)).toHaveLength(1);
});

// check functions

// check state props
