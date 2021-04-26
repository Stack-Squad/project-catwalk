import React, { useState, useEffect } from 'react';

import Ratings from './Ratings';
import Reviews from './Reviews';
import styles from '../css-modules/ratings-reviews.module.css';
import sampleData from '../../../helpers/sampleData';
import {
  getReviews, getReviewMetadata, markReviewHelpful, reportReview,
} from '../../../helpers/api';

const RatingsAndReviews = (props) => {
  const { productId, productName } = props;
  const [reviewList, setReviewList] = useState([...sampleData.reviewList.results]);
  const [reviews, setReviews] = useState([...sampleData.reviewList.results]);
  const [reviewData, setReviewData] = useState({ ...sampleData.reviewMetaData });
  const [sortBy, setSortBy] = useState('relevance');
  /*
   * a set of review_ids that tracks all reviews that user
   * has provided feedback on.
  */
  const [feedback, setFeedback] = useState(new Set());

  useEffect(() => {
    getReviewMetadata(productId)
      .then((reviewsMeta) => setReviewData({ ...reviewsMeta }))
      .then(() => getReviews(productId, sortBy))
      .then((reviewsData) => {
        setReviewList([...reviewsData]);
        setReviews([...reviewsData]);
        setFeedback(new Set());
      });
  }, [productId]);

  useEffect(() => {
    getReviewMetadata(productId)
      .then((reviewsMeta) => setReviewData({ ...reviewsMeta }))
      .then(() => getReviews(productId, sortBy))
      .then((reviewsData) => {
        setReviewList([...reviewsData]);
        setReviews([...reviewsData]);
      });
  }, [sortBy]);

  function markHelpFul(reviewId) {
    /*
     * when the size of feewdback changes
     * send req to review endpoint to mark review as helpful.
     * Return a new list of reviews and set state.
    */
    if (!(feedback.has(reviewId))) {
      const newFeedback = new Set(feedback);
      newFeedback.add(reviewId);
      markReviewHelpful(reviewId)
        .then(() => getReviews(productId, sortBy))
        .then((reviewsData) => {
          setReviewList([...reviewsData]);
          setReviews([...reviewsData]);
          setFeedback(newFeedback);
        });
    }
  }

  function report(reviewId) {
    const newFeedback = new Set(feedback);
    reportReview(reviewId)
      .then(() => getReviews(productId, sortBy))
      .then((reviewsData) => {
        setReviewList([...reviewsData]);
        setReviews([...reviewsData]);
        setFeedback(newFeedback);
      })
      .then(() => getReviewMetadata(productId))
      .then((reviewsMeta) => setReviewData({ ...reviewsMeta }));
  }

  return (
    <div id="ratings-reviews">
      <h1>Ratings & Reviews</h1>
      <div className={styles.container}>
        <Ratings
          reviewData={reviewData}
          reviewList={reviewList}
          setReviewList={setReviews}
        />
        <Reviews
          reviewsList={reviews}
          setSortBy={setSortBy}
          markHelpFul={markHelpFul}
          report={report}
          productName={productName}
        />
      </div>
    </div>
  );
};

export default RatingsAndReviews;
