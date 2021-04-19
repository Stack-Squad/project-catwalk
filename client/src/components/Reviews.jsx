import React, { useState, useEffect} from 'react';
import ReviewsList from './ReviewsList.jsx';
import SortOptions from './SortOptions.jsx';
import ReviewsButton from './ReviewsButton.jsx';
import styles from '../css-modules/reviews.module.css';

const Reviews = (props) => {
  const [sortBy, setSortBy] = useState('relevance');

  useEffect(() => {
    console.log(sortBy);
    // TODO: Make api call here to get
    // product reviews.
  }, [sortBy]);

  return (
    <div className={styles.container}>
      <SortOptions setSortBy={setSortBy}/>
      <ReviewsList />
      <ReviewsButton />
    </div>
  )
}
export default Reviews;