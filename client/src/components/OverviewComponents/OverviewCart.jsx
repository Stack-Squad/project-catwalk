import React from 'react';
import styles from '../../css-modules/overview-cart.module.css';

const OverviewCart = (props) => {
  const {
    currentStyle,
    sizeSelectedSwitchClick,
    currentSize,
    quantitySelectedSwitchClick,
    currentQuantity,
  } = props;
  const { skus } = currentStyle;

  const sizeQtyFinder = () => {
    const result = [];
    for (const sku in skus) {
      result.push([skus[sku].size, skus[sku].quantity]);
    }
    return result;
  };

  const qtyOptions = () => {
    const result = [];
    for (const skuTuple of sizeQtyFinder()) {
      const size = skuTuple[0];
      const quantity = skuTuple[1];
      if (size === currentSize) {
        for (let i = 1; i <= quantity; i++) {
          if (i <= 15) {
            result.push(i);
          }
        }
      }
    }
    return result;
  };

  return (
    <form className={styles.cartLayout}>
      <select className={styles.size} onChange={(e) => { sizeSelectedSwitchClick(e); }}>
        <option value="Select Size">Select Size</option>
        {sizeQtyFinder().map((val, idx) => <option key={idx} value={val[0]}>{val[0]}</option>)}
      </select>
      <select className={styles.quantity}>
        {qtyOptions().map((val, idx) => <option key={idx} value={val}>{val}</option>)}
      </select>
      <br />
      <input type="submit" className={styles.submit} value="ADD TO BAG" />
      <input type="submit" className={styles.whatIsThis} value="Wut?" />
    </form>
  );
};

export default OverviewCart;
