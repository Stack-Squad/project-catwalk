import React from 'react';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import styles from '../css-modules/ratings.module.css';


const Ratings = (props) => {
  return (
    <div className={styles.container}>
      <RatingsBreakdown />
      <ProductBreakdown />
    </div>
  )
}
export default Ratings;