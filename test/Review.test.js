import { shallow } from 'enzyme';
import React from 'react';

import StarRatings from '../client/src/components/StarRatings.jsx';
import Review from '../client/src/components/Review.jsx';
import sampleData from '../helpers/sampleData.js';

test ("renders Review component", () => {
  const reviews = sampleData.reviewList.results;
  const ratings = reviews[0].rating;
  const wrapper = shallow(<Review key={reviews[0].review_id} review={reviews[0]}/>);
  expect(wrapper.contains(<StarRatings ratings={ratings} />)).toEqual(true);
  expect(wrapper.hasClass('container')).toEqual(true);
  expect(wrapper.find('div.container')).toHaveLength(1);
  expect(wrapper.find('div.summary').hasClass('summary')).toEqual(true);
  expect(wrapper.find('div.reviewHeading').hasClass('reviewHeading')).toEqual(true);
});