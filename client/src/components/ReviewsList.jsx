import React from 'react';
import Review from './Review';
import styles from '../css-modules/review.module.css';

const ReviewsList = (props) => {
  const { reviews, markHelpFul } = props;
  return (
    <div className={styles.reviewList}>
      {reviews.map((review) => (
        <Review
          key={review.review_id}
          review={review}
          markHelpFul={markHelpFul}
        />
      ))}
    </div>
  );
};

export default ReviewsList;
