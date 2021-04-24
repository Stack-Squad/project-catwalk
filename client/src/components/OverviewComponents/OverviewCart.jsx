import React from 'react';
import styles from '../../css-modules/overview-cart.module.css';

const OverviewCart = (props) => {
  const { currentStyle } = props;
  const { skus } = currentStyle;

  let sizesFinder = () => {
    for (const sku in skus) {
      console.log(skus[sku].size)
    }
  };

  return (
    <form className={styles.cartLayout}>
      {sizesFinder()}
      <select className={styles.size}>
        <option value="Select Size">Select Size</option>
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
