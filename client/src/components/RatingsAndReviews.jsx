import React, { useState } from 'react';
import Ratings from './Ratings';
import Reviews from './Reviews';
import styles from '../css-modules/ratings-reviews.module.css';
import sampleData from '../../../helpers/sampleData';

const RatingsAndReviews = (props) => {
  const [reviewData, setReviewData] = useState(sampleData.reviewMetaData);
  const [reviewList, setReviewList] = useState(sampleData.reviewList);
  return (
    <div id="ratings-reviews">
      <h1>Ratings & Reviews</h1>
      <div className={styles.container}>
        <Ratings
          reviewData={reviewData}
          reviewList={reviewList}
        />
        <Reviews />
      </div>
    </div>
  );
};

export default RatingsAndReviews;
