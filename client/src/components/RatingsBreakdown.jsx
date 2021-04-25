import React, { useState, useEffect } from 'react';
import styles from '../css-modules/ratings-breakdown.module.css';
import { getReviewsBreakdown } from '../../../helpers/ratingsHelper';

const RatingsBreakdown = (props) => {
  const { reviews, recommend, setReviewList } = props;

  const [filteredReviews, setFilteredReviews] = useState({});

  const [filters, setFilters] = useState([]);

  const reviewsBreakdown = getReviewsBreakdown(reviews);

  const getPercentBreakown = (star) => {
    const numReviews = reviewsBreakdown[star].length;
    const value = Math.round((numReviews / reviews.length) * 1000) / 10;
    return value;
  };

  const showStarReviews = (event) => {
    const key = event.target.value;
    const selectedReviews = { ...filteredReviews };

    // if current star ratings doesn't exist in
    // filtered Ratings
    if (!(key in filteredReviews)) {
      selectedReviews[key] = [...reviewsBreakdown[key]];
    } else {
      // Selected star ratings exist in filtered reviews.
      delete selectedReviews[key];
    }

    if (Object.keys(selectedReviews).length === 0) {
      setFilteredReviews({});
      setFilters([]);
      setReviewList([...reviews]);
    } else {
      setFilteredReviews({
        ...selectedReviews,
      });
      let results = [];
      const selectedFilters = [];
      for (const star in selectedReviews) {
        results = [...results, ...selectedReviews[star]];
        selectedFilters.push(star);
      }

      setFilters([...selectedFilters]);
      setReviewList([...results]);
    }
  };

  const clearFilters = () => {
    setFilteredReviews({});
    setFilters([]);
    setReviewList([...reviews]);
  };

  return (
    <div className={styles.container}>
      <h4>Ratings Breakdown</h4>
      <div className={styles.filters}>
        {filters.length > 0 && (
          <>
            {filters.map((starRating) => (
              <span key={starRating} className={styles.ratings}>
                {starRating}
                {' '}
                stars
              </span>
            ))}
            <button onClick={clearFilters}>clear</button>
          </>
        )}
      </div>
      {[5, 4, 3, 2, 1].map((star) => (
        <div key={star} className={styles.layout}>
          <button onClick={showStarReviews} value={star}>
            {star}
            {' '}
            stars
          </button>
          <div className={styles.barContainer}>
            <div
              className={styles.bar}
              style={{ width: `${getPercentBreakown(star)}%` }}
            />
          </div>
        </div>
      ))}
      <p>
        {recommend}
        %
        {' '}
        of reviews recommended this product
      </p>
    </div>
  );
};

export default RatingsBreakdown;
