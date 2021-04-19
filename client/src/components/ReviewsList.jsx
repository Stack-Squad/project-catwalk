import React from 'react';
import Review from './Review.jsx';

const ReviewsList = (props) => {
  const {reviews} = props;
  return (
    <div>
      {reviews.map(review => {
        return (
        <Review key={review.review_id} review={review}/>
        );
      })}
    </div>
  );
};

export default ReviewsList;