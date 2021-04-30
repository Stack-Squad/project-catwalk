import React, { useState } from 'react';
import Modal from './Modal';
import WriteReview from './WriteReview';
import styles from '../css-modules/reviewsButton.module.css';

const ReviewsButton = (props) => {
  const {
    reviewCount, moreReviews, productName, productId, characteristics,
  } = props;
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
            className={styles.button}
            onClick={moreReviews}
            type="button"
            value="MORE REVIEWS"
          />
        </div>
      )}
      <div>
        <input
          className={styles.button}
          type="button"
          value="ADD A REVIEW   +"
          onClick={toggleModal}
        />
      </div>
      {show && (
      <Modal show={show} onCloseRequest={toggleModal}>
        <WriteReview
          productName={productName}
          productId={productId}
          characteristics={characteristics}
          toggleModal={toggleModal}
        />
      </Modal>
      )}

    </div>
  );
};

export default ReviewsButton;
