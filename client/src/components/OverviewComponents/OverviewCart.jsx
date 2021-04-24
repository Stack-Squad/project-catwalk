import React from 'react';
import styles from '../../css-modules/overview-cart.module.css';

const OverviewCart = (props) => {
  const { currentStyle } = props;
  const { skus } = currentStyle;

  const sizesFinder = () => {
    const result = new Set();
    for (const sku in skus) {
      result.add(skus[sku].size);
    }
    return Array.from(result);
  };

  return (
    <form className={styles.cartLayout}>
      <select className={styles.size}>
        <option value="Select Size">Select Size</option>
        {sizesFinder().map((size) => <option value={size}>{size}</option>)}
      </select>
      <select className={styles.quantity}>
        <option value="1">1</option>
      </select>
      <br />
      <input type="submit" className={styles.submit} value="ADD TO BAG" />
      <input type="submit" className={styles.whatIsThis} value="Wut?" />
    </form>
  );
};

export default OverviewCart;
