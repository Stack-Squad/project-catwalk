import React from 'react';
import {getStarRatings} from '../../../helpers/ratingsHelper.js';
import Star from './Star.jsx';


const StarRatings = (props) => {
  const {ratings} = props;
  const stars = getStarRatings(ratings);

  return (
    <div>
      {stars.map((star, _) => {
        return (
          <Star key={_} star={star}/>
        );
      })}
    </div>
  )

}

export default StarRatings;