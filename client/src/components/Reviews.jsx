import React, { useState, useEffect} from 'react';
import ReviewsList from './ReviewsList.jsx';
import SortOptions from './SortOptions.jsx';
import ReviewsButton from './ReviewsButton.jsx';
import styles from '../css-modules/reviews.module.css';
import sampleData from '../../../helpers/sampleData.js';

const Reviews = (props) => {
  const [sortBy, setSortBy] = useState('relevance');
  const [reviews, setReviews] = useState(sampleData.reviewList.results);

  useEffect(() => {
    console.log(sortBy);
    // TODO: Make api call here to get
    // product reviews.
  }, [sortBy]);

  return (
    <div className={styles.container}>
      <SortOptions setSortBy={setSortBy}/>
      <ReviewsList reviews={reviews}/>
      <ReviewsButton />
    </div>
  )
}
export default Reviews;