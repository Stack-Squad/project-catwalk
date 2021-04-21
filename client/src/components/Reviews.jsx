import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList';
import SortOptions from './SortOptions';
import ReviewsButton from './ReviewsButton';
import styles from '../css-modules/reviews.module.css';
import sampleData from '../../../helpers/sampleData';

const Reviews = (props) => {
  const [sortBy, setSortBy] = useState('relevance');
  const [allReviews, setAllReviews] = useState(sampleData.reviewList.results);
  const [reviews, setReviews] = useState(allReviews.slice(0, 2));

  function moreReviews() {
    const soFar = reviews.length;
    setReviews(allReviews.slice(0, soFar + 2));
  }

  useEffect(() => {
    console.log(sortBy);
    // TODO: Make api call here to get
    // product reviews.
  }, [sortBy]);

  return (
    <div className={styles.container}>
      <SortOptions setSortBy={setSortBy} />
      <ReviewsList reviews={reviews} />
      <ReviewsButton
        reviewCount={[reviews.length, allReviews.length]}
        moreReviews={moreReviews}
      />
    </div>
  );
};
export default Reviews;
