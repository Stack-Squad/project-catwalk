import React from 'react';
import StarRatings from './StarRatings.jsx';

const Review = (props) => {
  // Use a helper function here to
  // calculate star ratings
  // pass an array of star ratings to
  // StarRatings Component.
  const {review} = props;

  return (
    <div>
      <StarRatings ratings={review.rating}/>
    </div>
  )

}

export default Review;