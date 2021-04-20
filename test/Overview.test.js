import { shallow } from 'enzyme';
import React from 'react';

import Overview from '../client/src/components/Overview.jsx';
import OverviewImgGal from '../client/src/components/OverviewComponents/OverviewImgGal.jsx';

import sampleData from '../helpers/sampleData.js';

test ("renders Overview Image Gallery component", () => {
  const wrapper = shallow(<Overview />);
  expect(wrapper.find(OverviewImgGal)).toHaveLength(1);
});

// check functions

// check state props