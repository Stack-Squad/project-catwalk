import React from 'react';
import styles from '../../css-modules/overview-product-info.module.css';

const OverviewProductInfo = (props) => {
  const { infoData } = props;
  return (
    <div className={styles.productInfoLayout}>
      <div className={styles.rating}>CSS Placement: Rating</div>
      <div className={styles.category}>{infoData.category}</div>
      <div className={styles.name}>{infoData.name}</div>
      <div className={styles.price}>{`$${infoData.default_price}`}</div>
      <div className={styles.share}>CSS Placement: Share</div>
    </div>
  );
};

export default OverviewProductInfo;
