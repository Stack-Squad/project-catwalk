import React from 'react';
import {getStarRatings} from '../../../helpers/ratingsHelper.js';


const StarRatings = (props) => {
  const {ratings} = props;
  const stars = getStarRatings(ratings);

  return (
    <div>
      {stars.map((star, _) => {
        return (
          <span key={_}>{star}</span>
        );
      })}
    </div>
  )

}

export default StarRatings;