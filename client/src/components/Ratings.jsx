import React from 'react';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import RatingsSummary from './RatingsSummary.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import styles from '../css-modules/ratings.module.css';
import {getAverageRatings} from '../../../helpers/ratingsHelper.js';


const Ratings = (props) => {
  const {reviewData} = props;
  const rating = getAverageRatings(reviewData.ratings);

  return (
    <div className={styles.container}>
      <RatingsSummary rating={rating}/>
      <RatingsBreakdown />
      <ProductBreakdown />
    </div>
  );
}
export default Ratings;