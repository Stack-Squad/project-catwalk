import { shallow } from 'enzyme';
import React from 'react';

import ProductBreakdown from '../client/src/components/ProductBreakdown';
import sampleData from '../helpers/sampleData';

test('renders Ratings component', () => {
  const reviewData = sampleData.reviewMetaData;
  const wrapper = shallow(
    <ProductBreakdown characteristics={reviewData.characteristics} />,
  );
  expect(wrapper.contains(<p>product breakdown</p>)).toEqual(true);
});
