import React, { useState, useEffect } from 'react';

import Ratings from './Ratings';
import Reviews from './Reviews';
import styles from '../css-modules/ratings-reviews.module.css';
import sampleData from '../../../helpers/sampleData';
import {
  getReviews, getReviewMetadata, markReviewHelpful, reportReview,
} from '../../../helpers/api';

const RatingsAndReviews = (props) => {
  const {
    productId, productName, metaData, allReviews,
  } = props;

  const [reviewData, setReviewData] = useState({
    reviewList: [...allReviews],
    metaData: { ...metaData },
    reviews: [...allReviews],
    sortBy: 'relevance',
    feedback: new Set(),
  });
  /*
   * a set of review_ids that tracks all reviews that user
   * has provided feedback on.
  */
  // const [feedback, setFeedback] = useState(new Set());

  useEffect(() => {
    const meta = getReviewMetadata(productId);
    const reviews = getReviews(productId, reviewData.sortBy);
    Promise.all([meta, reviews])
      .then((values) => {
        setReviewData({
          ...reviewData,
          metaData: { ...values[0] },
          reviewList: [...values[1]],
          reviews: [...values[1]],
          feedback: new Set(),
        });
      });
  }, [reviewData.metaData.product_id]);

  function getSortBy(keyWord) {
    const meta = getReviewMetadata(productId);
    const reviews = getReviews(productId, reviewData.sortBy);
    Promise.all([meta, reviews])
      .then((values) => {
        setReviewData({
          ...reviewData,
          metaData: { ...values[0] },
          reviewList: [...values[1]],
          reviews: [...values[1]],
        });
      });
  }

  function markHelpFul(reviewId) {
    /*
     * when the size of feewdback changes
     * send req to review endpoint to mark review as helpful.
     * Return a new list of reviews and set state.
    */
    if (!(reviewData.feedback.has(reviewId))) {
      const newFeedback = new Set(reviewData.feedback);

      markReviewHelpful(reviewId)
        .then(() => {
          const reviews = getReviews(productId, reviewData.sortBy);
          const meta = getReviewMetadata(productId);
          Promise.all([meta, reviews])
            .then((values) => {
              setReviewData({
                ...reviewData,
                metaData: { ...values[0] },
                reviewList: [...values[1]],
                reviews: [...values[1]],
                feedback: newFeedback,
              });
            });
        });
    }
  }

  function report(reviewId) {
    const newFeedback = new Set(reviewData.feedback);
    reportReview(reviewId)
      .then(() => {
        const reviews = getReviews(productId, reviewData.sortBy);
        const meta = getReviewMetadata(productId);
        Promise.all([meta, reviews])
          .then((values) => {
            setReviewData({
              ...reviewData,
              metaData: { ...values[0] },
              reviewList: [...values[1]],
              reviews: [...values[1]],
              feedback: newFeedback,
            });
          });
      });
  }

  function setReviews(newReviews) {
    setReviewData({
      ...reviewData,
      reviews: newReviews,
    });
  }

  return (
    <div id="ratings-reviews">
      <h1 className="ratings-reviews-header">Ratings & Reviews</h1>
      <div className={styles.container}>
        <Ratings
          reviewData={reviewData.metaData}
          reviewList={reviewData.reviewList}
          setReviewList={setReviews} // refactor this setReviews doesn't exist anymore
        />
        <Reviews
          reviewsList={reviewData.reviews}
          setSortBy={getSortBy}
          markHelpFul={markHelpFul}
          report={report}
          productName={productName}
          productId={productId}
          characteristics={reviewData.metaData.characteristics}
        />
      </div>
    </div>
  );
};

export default RatingsAndReviews;
