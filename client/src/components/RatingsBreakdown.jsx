import React from 'react';
import styles from '../css-modules/ratings-breakdown.module.css';
import { getReviewsBreakdown } from '../../../helpers/ratingsHelper';

const RatingsBreakdown = (props) => {
  const { reviews } = props;
  const reviewsBreakdown = getReviewsBreakdown(reviews);

  const getPercentBreakown = (star) => {
    const numReviews = reviewsBreakdown[star].length;
    const value = Math.round((numReviews / reviews.length) * 1000) / 10;
    return value;
  };

  const showStarReviews = (event) => {
    /*
    * TODO:
    * Pass function as props to be invoke here
    * function should take reviewsBreakdown[event.target.value]
    * as reviews to be rendered in reviewList component
    * figure out how to make this additive
    */
    console.log(event.target.value);
    console.log(reviewsBreakdown[event.target.value]);
  };

  return (
    <div className={styles.container}>
      <h4>Ratings Breakdown</h4>
      {[5, 4, 3, 2, 1].map((star) => (
        <div key={star} className={styles.layout}>
          <button onClick={showStarReviews} value={star}>
            {star}
            {' '}
            stars
          </button>
          <div className={styles.barContainer}>
            <div
              className={styles.bar}
              style={{ width: `${getPercentBreakown(star)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatingsBreakdown;
