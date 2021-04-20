import React from 'react';
import Review from './Review.jsx';
import styles from '../css-modules/review.module.css';

const ReviewsList = (props) => {
  const {reviews} = props;
  return (
    <div className={styles.reviewList}>
      {reviews.map(review => {
        return (
        <Review key={review.review_id} review={review}/>
        );
      })}
    </div>
  );
};

export default ReviewsList;