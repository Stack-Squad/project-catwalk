import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import SortOptions from './SortOptions.jsx';
import ReviewsButton from './ReviewsButton.jsx';
import styles from '../css-modules/reviews.module.css';

const Reviews = (props) => {
  return (
    <div className={styles.container}>
      <SortOptions />
      <ReviewsList />
      <ReviewsButton />
    </div>
  )
}
export default Reviews;