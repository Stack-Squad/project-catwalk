import React from 'react';
import styles from '../../css-modules/overview-cart.module.css';

const OverviewCart = (props) => {
  const { currentStyle } = props;
  const { skus } = currentStyle;

  const sizeQtyFinder = () => {
    const result = [];
    for (const sku in skus) {
      result.push([skus[sku].size, skus[sku].quantity]);
    }
    return result;
  };

  return (
    <form className={styles.cartLayout}>
      <select className={styles.size}>
        <option value="Select Size">Select Size</option>
        {sizeQtyFinder().map((val, idx) => <option key={idx} value={val[0]}>{val[0]}</option>)}
      </select>
      <select className={styles.quantity}>
        <option value="1">1</option>
        {sizeQtyFinder().map((val, idx) => {
          if (val[1] !== 1) {
            return <option key={idx} value={val[1]}>{val[1]}</option>;
          }
        })}
      </select>
      <br />
      <input type="submit" className={styles.submit} value="ADD TO BAG" />
      <input type="submit" className={styles.whatIsThis} value="Wut?" />
    </form>
  );
};

export default OverviewCart;
