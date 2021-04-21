import React from 'react';
import StarRatings from './StarRatings.jsx';
import styles from '../css-modules/ratingsSummary.module.css';


const RatingsSummary = (props) => {
  const {rating} = props;
  return (
    <div className={styles.container}>
      <section className={styles.number}>
        {rating}
      </section>
      <section className={styles.stars}>
        <StarRatings ratings={rating}/>
      </section>
    </div>
  );
}
export default RatingsSummary;