import React from 'react';
import RatingsBreakdown from './RatingsBreakdown';
import RatingsSummary from './RatingsSummary';
import ProductBreakdown from './ProductBreakdown';
import styles from '../css-modules/ratings.module.css';
import { getAverageRatings } from '../../../helpers/ratingsHelper';

const Ratings = (props) => {
  const { reviewData } = props;
  const rating = getAverageRatings(reviewData.ratings);

  return (
    <div className={styles.container}>
      <RatingsSummary rating={rating} />
      <RatingsBreakdown />
      <ProductBreakdown />
    </div>
  );
};
export default Ratings;
