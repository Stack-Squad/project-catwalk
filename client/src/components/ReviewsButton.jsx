import React from 'react';
import styles from '../css-modules/reviewsButton.module.css';

const ReviewsButton = (props) => {
  const { reviewCount, moreReviews } = props;
  const soFar = reviewCount[0];
  const total = reviewCount[1];

  return (
    <div className={styles.container}>
      {(total > 2 && soFar < total) && (
        <div>
          <input
            className={styles.reviewButton}
            onClick={moreReviews}
            type="button"
            value="MORE REVIEWS"
          />
        </div>
      )}
      <div>
        <input
          className={styles.reviewButton}
          type="button"
          value="ADD A REVIEW   +"
        />
      </div>

    </div>
  );
};

export default ReviewsButton;
