import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import styles from '../css-modules/ratings-reviews.module.css';

const RatingsAndReviews = (props) => {
  return (
    <div>
      <h1>Ratings And Reviews</h1>
      <div className={styles.container}>
        <Ratings />
        <Reviews />
      </div>
    </div>
  );
}

export default RatingsAndReviews;