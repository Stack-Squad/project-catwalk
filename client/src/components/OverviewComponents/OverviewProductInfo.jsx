import React from 'react';
import styles from '../../css-modules/overview-product-info.module.css';

const OverviewProductInfo = (props) => {
  const { infoData, stars, actualPrice } = props;

  const defaultOrChange = () => {
    if (infoData.default_price !== actualPrice) {
      return (
        <div className={styles.price}>
          <div style={{ textDecoration: 'line-through' }}>{`$${infoData.default_price}`}</div>
          <div>{`$${actualPrice}`}</div>
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
      </div>
      <div className={styles.category}>{infoData.category}</div>
      <div className={styles.name}>{infoData.name}</div>
      {defaultOrChange()}
      <div className={styles.share}>CSS Placement: Share</div>
    </div>
  );
};

export default OverviewProductInfo;
