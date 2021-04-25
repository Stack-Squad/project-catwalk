import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList';
import SortOptions from './SortOptions';
import ReviewsButton from './ReviewsButton';
import styles from '../css-modules/reviews.module.css';
import sampleData from '../../../helpers/sampleData';

const Reviews = (props) => {
  const {
    reviewsList, setSortBy, markHelpFul, report,
  } = props;
  const [allReviews, setAllReviews] = useState([...reviewsList]);
  const [reviews, setReviews] = useState(reviewsList.slice(0, 2));

  useEffect(() => {
    setAllReviews([...reviewsList]);
    setReviews(reviewsList.slice(0, 2));
  }, [reviewsList]);

  function moreReviews() {
    const soFar = reviews.length;
    setReviews(reviewsList.slice(0, soFar + 2));
  }

  return (
    <div className={styles.container}>
      <SortOptions
        setSortBy={setSortBy}
        reviewCount={[reviews.length, allReviews.length]}
      />
      <ReviewsList
        reviews={reviews}
        markHelpFul={markHelpFul}
        report={report}
      />
      <ReviewsButton
        reviewCount={[reviews.length, allReviews.length]}
        moreReviews={moreReviews}
      />
    </div>
  );
};
export default Reviews;
