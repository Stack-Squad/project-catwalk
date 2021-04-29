import React, { useState, useEffect } from 'react';
import StarRatings from './StarRatings';
import ReviewImages from './ReviewImages';
import styles from '../css-modules/review.module.css';
import { getCharacters } from '../../../helpers/ratingsHelper';
import formatDate from '../../../helpers/dateFormatter';

const Review = (props) => {
  const { review, markHelpFul, report } = props;
  const message = getCharacters(review.body, 250);
  const [body, setBody] = useState(message);
  const [show, setShow] = useState(false);

  function onToggle() {
    setShow(!show);
    if (show) {
      setBody(message);
    } else {
      setBody(review.body);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.reviewHeading}>
        <section>
          <StarRatings ratings={review.rating} />
        </section>
        <section>
          <span>
            {review.reviewer_name}
            ,
            {' '}
          </span>
          <span>{formatDate(new Date(review.date))}</span>
        </section>
      </div>
      <div className={styles.summary}>
        {getCharacters(review.summary, 60)}
      </div>
      <div>
        <p className={styles.body}>
          {body}
          {(review.body.length > 250 && !show)
          && (
          <button onClick={onToggle} className={styles.button}>
            show More
          </button>
          )}

          {(show)
            && (
            <button onClick={onToggle} className={styles.button}>
              show Less
            </button>
            )}
        </p>
        {review.photos.length > 0 && (
          <ReviewImages images={review.photos} />
        )}
        {review.recommend && (
          <div className={styles.recommend}>
            <i className="fas fa-check" />
            <p>I recommend this product</p>
          </div>
        )}
        {review.response && (
          <div className={styles.response}>
            <p className={styles.responseHeader}>Response:</p>
            <p className={styles.responseBody}>{review.response}</p>
          </div>
        )}
      </div>
      <div>
        <p>
          Helpful?
          {'  '}
          <span>
            <button
              value={review.review_id}
              onClick={(event) => markHelpFul(event.target.value)}
              className={styles.button}
            >
              Yes
              {' '}
            </button>
            (
            {review.helpfulness}
            )
          </span>
          {' '}
          |
          {' '}
          <span>
            <button
              value={review.review_id}
              onClick={(event) => report(event.target.value)}
              className={styles.button}
            >
              Report
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Review;
