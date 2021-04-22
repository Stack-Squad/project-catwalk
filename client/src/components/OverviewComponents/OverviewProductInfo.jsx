import React from 'react';
import styles from '../../css-modules/overview-product-info.module.css';

const OverviewProductInfo = (props) => {
  const { infoData, stars } = props;
  return (
    <div className={styles.productInfoLayout}>
      <div className={styles.rating}>
        {stars.map((star, index) => <span key={index}>{star}</span>)}
        <a href="#ratings-reviews">Read all reviews</a>
      </div>
      <div className={styles.category}>{infoData.category}</div>
      <div className={styles.name}>{infoData.name}</div>
      <div className={styles.price}>{`$${infoData.default_price}`}</div>
      <div className={styles.share}>CSS Placement: Share</div>
    </div>
  );
};

export default OverviewProductInfo;
