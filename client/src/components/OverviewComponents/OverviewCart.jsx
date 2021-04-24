import React from 'react';
import styles from '../../css-modules/overview-cart.module.css';

const OverviewCart = () => (
  <form className={styles.cartLayout}>
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

export default OverviewCart;
