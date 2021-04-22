import React from 'react';
import styles from '../../css-modules/overview-product-info.module.css';

const OverviewProductInfo = () => (
  <div className={styles.productInfoLayout}>
    <div className={styles.rating}>Rating</div>
    <div className={styles.category}>Category</div>
    <div className={styles.name}>Name</div>
    <div className={styles.price}>Price</div>
    <div className={styles.share}>Share</div>
  </div>
);

export default OverviewProductInfo;

// "rating"
// "category"
// "name"
// "price share";
