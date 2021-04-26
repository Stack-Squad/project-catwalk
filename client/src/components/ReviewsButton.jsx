import React, { useState } from 'react';
import QAModal from './QnAComponents/QAModal';
import styles from '../css-modules/reviewsButton.module.css';

const ReviewsButton = (props) => {
  const { reviewCount, moreReviews, productName } = props;
  const soFar = reviewCount[0];
  const total = reviewCount[1];

  const [show, setShow] = useState(false);

  function toggleModal() {
    setShow(!show);
  }

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
          onClick={toggleModal}
        />
      </div>
      {show && (
      <QAModal show={show} onCloseRequest={toggleModal}>
        <h4>{`Write Your Review about the ${productName}`}</h4>
        <p>Modal</p>
      </QAModal>
      )}

    </div>
  );
};

export default ReviewsButton;
