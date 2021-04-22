import React from 'react';
import styles from '../../css-modules/overview-product-info.module.css';

const OverviewProductInfo = (props) => {
  const { infoData, stars, actualPrice } = props;

  const defaultOrChange = () => {
    if (infoData.default_price !== actualPrice) {
      return (
        <div className={styles.price}>
          <div style={{ textDecoration: 'line-through' }}>{`$${infoData.default_price}`}</div>
          <div style={{ color: 'red' }}>{`$${actualPrice}`}</div>
        </div>
      );
    }
    return <div className={styles.price}>{`$${infoData.default_price}`}</div>;
  };

  return (
    <div className={styles.productInfoLayout}>
      <div className={styles.rating}>
        {stars.map((star, index) => <span key={index}>{star}</span>)}
        <a href="#ratings-reviews">Read all reviews</a>
        {' <-- Fix to show number of reviews !OR! Fix to not show this section IF no reviews exist'}
      </div>
      <div className={styles.category}>{infoData.category}</div>
      <div className={styles.name}>{infoData.name}</div>
      {defaultOrChange()}
      <div className={styles.share}>
        <button className={styles.shareButton}>Facebook</button>
        <button className={styles.shareButton}>Twitter</button>
        <button className={styles.shareButton}>Pinterest</button>
        {' <-- Implement Share Functionality.'}
      </div>
    </div>
  );
};

export default OverviewProductInfo;
