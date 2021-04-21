import { shallow } from 'enzyme';
import React from 'react';

import Ratings from '../client/src/components/Ratings.jsx';
import RatingsSummary from '../client/src/components/RatingsSummary.jsx';
import ProductBreakdown from '../client/src/components/ProductBreakdown.jsx';
import RatingsBreakdown from '../client/src/components/RatingsBreakdown.jsx';
import sampleData from '../helpers/sampleData.js';

test ("renders Ratings component", () => {
  const reviewData = sampleData.reviewMetaData;
  const wrapper = shallow(<Ratings reviewData={reviewData}/>);
  expect(wrapper.contains(<RatingsSummary rating={2.5}/>)).toEqual(true);
  expect(wrapper.contains(<RatingsBreakdown />)).toEqual(true);
  expect(wrapper.contains(<ProductBreakdown />)).toEqual(true);
});