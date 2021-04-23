import React from 'react';
import RatingsBreakdown from './RatingsBreakdown';
import RatingsSummary from './RatingsSummary';
import ProductBreakdown from './ProductBreakdown';
import styles from '../css-modules/ratings.module.css';
import { getAverageRatings, getPercentageRecommend } from '../../../helpers/ratingsHelper';

const Ratings = (props) => {
  const { reviewData, reviewList, setReviewList } = props;
  const rating = getAverageRatings(reviewData.ratings);
  const recommend = getPercentageRecommend(reviewData.recommended);

  return (
    <div className={styles.container}>
      <RatingsSummary rating={rating} />
      <RatingsBreakdown
        reviews={reviewList}
        recommend={recommend}
        setReviewList={setReviewList}
      />
      <ProductBreakdown characteristics={reviewData.characteristics} />
    </div>
  );
};
export default Ratings;
