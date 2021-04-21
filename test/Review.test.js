import { shallow } from 'enzyme';
import React from 'react';

import StarRatings from '../client/src/components/StarRatings';
import Review from '../client/src/components/Review';
import ReviewImages from '../client/src/components/ReviewImages';
import sampleData from '../helpers/sampleData';

test('renders Review component', () => {
  const reviews = sampleData.reviewList.results;
  const ratings = reviews[0].rating;
  const wrapper = shallow(<Review key={reviews[0].review_id} review={reviews[0]} />);
  expect(wrapper.contains(<StarRatings ratings={ratings} />)).toEqual(true);
  expect(wrapper.hasClass('container')).toEqual(true);
  expect(wrapper.find('div.container')).toHaveLength(1);
  expect(wrapper.find('div.summary').hasClass('summary')).toEqual(true);
  expect(wrapper.find('div.reviewHeading').hasClass('reviewHeading')).toEqual(true);
});

test('renders Review component with image and button', () => {
  const reviews = sampleData.reviewList.results;
  const { photos } = reviews[1];
  const wrapper = shallow(<Review key={reviews[1].review_id} review={reviews[1]} />);
  expect(wrapper.contains(<ReviewImages images={photos} />));
  expect(wrapper.find('button')).toHaveLength(1);
});

test('renders Review component with recommend', () => {
  const reviews = sampleData.reviewList.results;
  const wrapper = shallow(<Review key={reviews[1].review_id} review={reviews[1]} />);
  expect(wrapper.find('div.recommend').hasClass('recommend')).toEqual(true);
});
