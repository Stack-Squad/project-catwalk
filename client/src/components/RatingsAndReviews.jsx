import React, { useState, useEffect } from 'react';
import Ratings from './Ratings';
import Reviews from './Reviews';
import styles from '../css-modules/ratings-reviews.module.css';
import sampleData from '../../../helpers/sampleData';

const RatingsAndReviews = (props) => {
  const { productId } = props;
  const [reviewData, setReviewData] = useState(sampleData.reviewMetaData);
  const [reviewList, setReviewList] = useState(sampleData.reviewList.results);
  const [reviews, setReviews] = useState([...reviewList]);

  return (
    <div id="ratings-reviews">
      <h1>Ratings & Reviews</h1>
      <div className={styles.container}>
        <Ratings
          reviewData={reviewData}
          reviewList={reviewList}
          setReviewList={setReviews}
        />
        <Reviews reviewsList={reviews} />
      </div>
    </div>
  );
};

export default RatingsAndReviews;
