import React from 'react';
import RatingsBreakdown from './RatingsBreakdown';
import RatingsSummary from './RatingsSummary';
import ProductBreakdown from './ProductBreakdown';
import styles from '../css-modules/ratings.module.css';
import { getAverageRatings } from '../../../helpers/ratingsHelper';

const Ratings = (props) => {
  const { reviewData, reviewList } = props;
  const rating = getAverageRatings(reviewData.ratings);

  return (
    <div className={styles.container}>
      <RatingsSummary rating={rating} />
      <RatingsBreakdown reviews={reviewList.results} />
      <ProductBreakdown characteristics={reviewData.characteristics} />
    </div>
  );
};
export default Ratings;
