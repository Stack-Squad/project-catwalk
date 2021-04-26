import { shallow } from 'enzyme';
import React from 'react';

import Ratings from '../client/src/components/Ratings';
import RatingsSummary from '../client/src/components/RatingsSummary';
import ProductBreakdown from '../client/src/components/ProductBreakdown';
import RatingsBreakdown from '../client/src/components/RatingsBreakdown';
import sampleData from '../helpers/sampleData';
import { getAverageRatings, getPercentageRecommend } from '../helpers/ratingsHelper';

test('renders Ratings component', () => {
  const reviewData = sampleData.reviewMetaData;
  const reviewList = sampleData.reviewList.results;
  const rating = getAverageRatings(reviewData.ratings);
  const recommend = getPercentageRecommend(reviewData.recommended);
  const wrapper = shallow(
    <Ratings reviewData={reviewData} reviewList={reviewList} />,
  );
  expect(wrapper.contains(<RatingsSummary rating={rating} />)).toEqual(true);
  expect(wrapper.contains(
    <RatingsBreakdown reviews={reviewList} recommend={recommend} />,
  )).toEqual(true);
  expect(wrapper.contains(
    <ProductBreakdown characteristics={reviewData.characteristics} />,
  )).toEqual(true);
});
