import React from 'react';
import StarRatings from './StarRatings.jsx';
import styles from '../css-modules/review.module.css';
import {getCharacters} from '../../../helpers/ratingsHelper.js';

const Review = (props) => {
  const {review} = props;

  return (
    <div className={styles.container}>
      <div>
        <StarRatings ratings={review.rating}/>
      </div>
      <div className={styles.summary}>
        {getCharacters(review.summary, 60)}
      </div>
      <div>Review Body</div>
      <div>Response</div>
      <div>Helpfulness</div>
    </div>
  )

}

export default Review;