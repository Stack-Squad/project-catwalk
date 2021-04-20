import React, {useState, effect} from 'react';
import StarRatings from './StarRatings.jsx';
import styles from '../css-modules/review.module.css';
import {getCharacters} from '../../../helpers/ratingsHelper.js';
import formatDate from '../../../helpers/dateFormatter.js';

const Review = (props) => {
  const {review} = props;
  const message = getCharacters(review.body, 250);
  const [body, setBody] = useState(message);
  const [show, setShow] = useState(false);

  function onToggle() {
    setShow(!show);
    (show) ? setBody(message) : setBody(review.body);
  }

  return (
    <div className={styles.container}>
      <div className={styles.reviewHeading}>
        <section>
          <StarRatings ratings={review.rating}/>
        </section>
        <section>
          <span>{review.reviewer_name},{" "}</span>
          <span>{formatDate(new Date(review.date))}</span>
        </section>
      </div>
      <div className={styles.summary}>
        {getCharacters(review.summary, 60)}
      </div>
      <div>
        <p>
          {body}
          {(review.body.length > 250 && !show) &&
          <button onClick={onToggle}>
            show More
          </button>
          }

          {(show) &&
            <button onClick={onToggle}>
              show Less
            </button>
          }
        </p>
        {review.recommend && <p>I recommend this product</p>}
      </div>
      {review.response !== null &&  <div>Response</div>}
      <div>
        <p>
          Helpful?{"  "}
          <span><a href='#'>Yes{" "}</a>({review.helpfulness})</span>
          {" "}|{" "}
          <span><a href='#'>Report</a></span>
        </p>
      </div>
    </div>
  );

}

export default Review;