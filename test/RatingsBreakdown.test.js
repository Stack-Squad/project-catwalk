import { shallow } from 'enzyme';
import React from 'react';

import RatingsBreakdown from '../client/src/components/RatingsBreakdown';
import sampleData from '../helpers/sampleData';

test('renders RatingsBreakdowm component', () => {
  const { reviewList } = sampleData;
  const wrapper = shallow(<RatingsBreakdown reviews={reviewList.results} />);
  expect(wrapper.hasClass('container')).toEqual(true);
  expect(wrapper.find('div.container')).toHaveLength(1);
  expect(wrapper.find('div.layout')).toHaveLength(5);
});
