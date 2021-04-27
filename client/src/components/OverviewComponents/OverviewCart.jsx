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
    let isSupplyAvailable = 0;
    for (const sku in skus) {
      isSupplyAvailable += skus[sku].quantity;
      result.push([skus[sku].size, skus[sku].quantity]);
    }
    if (isSupplyAvailable === 0) {
      return false;
    }
    return result;
  };

  const qtyOptions = () => {
    const result = [];
    if (sizeQtyFinder().length === 0) {
      return result;
    }
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
        {sizeQtyFinder() !== false
          ? sizeQtyFinder().map((val, idx) => <option key={idx} value={val[0]}>{val[0]}</option>)
          : <option value="OUT OF STOCK">OUT OF STOCK</option> }
      </select>
      <select
        className={styles.quantity}
        disabled={currentSize === ''}
        onChange={(e) => { quantitySelectedSwitchClick(e); }}
      >
        {qtyOptions().length === 0
          ? <option value="-">-</option>
          : qtyOptions().map((val, idx) => <option key={idx} value={val}>{val}</option>)}
      </select>
      <br />
      <input type="submit" className={styles.submit} value="ADD TO BAG" />
      <input type="submit" className={styles.whatIsThis} value="Wut?" />
    </form>
  );
};

export default OverviewCart;
