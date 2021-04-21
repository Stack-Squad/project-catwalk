import { shallow } from 'enzyme';
import React from 'react';

import RatingsSummary from '../client/src/components/RatingsSummary.jsx';
import StarRatings from '../client/src/components/StarRatings.jsx';
import sampleData from '../helpers/sampleData.js';

test ("renders RatingsSummary component", () => {
  const wrapper = shallow(<RatingsSummary rating={2.5}/>);
  expect(wrapper.contains(<StarRatings ratings={2.5} />)).toEqual(true);
  expect(wrapper.hasClass('container')).toEqual(true);
  expect(wrapper.find('div.container')).toHaveLength(1);
  expect(wrapper.find('section.number').hasClass('number')).toEqual(true);
  expect(wrapper.find('section.stars').hasClass('stars')).toEqual(true);
});