import React from 'react';
import styles from '../../css-modules/overview-cart.module.css';

const OverviewCart = (props) => {
  const {
    currentStyle,
    sizeSelectedSwitchClick,
    currentSize,
    quantitySelectedSwitchClick,
    currentQuantity,
    addToCart,
  } = props;
  const { skus } = currentStyle;

  const sizeQtyFinder = () => {
    const result = [['Select Size', 0]];
    let isSupplyAvailable = 0;
    for (const sku in skus) {
      isSupplyAvailable += skus[sku].quantity;
      result.push([skus[sku].size, skus[sku].quantity]);
    }
    if (isSupplyAvailable === 0) {
      if (document.getElementById('addToCart')) {
        document.getElementById('addToCart').hidden = true;
      }
      return [['OUT OF STOCK', 0]];
    }
    if (document.getElementById('addToCart')) {
      document.getElementById('addToCart').hidden = false;
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
    <form id="cart" className={styles.cartLayout}>
      <select id="sizeSelect" className={styles.size} onChange={(e) => { sizeSelectedSwitchClick(e); }}>
        {sizeQtyFinder().map((val, idx) => <option key={idx} value={val[0]}>{val[0]}</option>)}
      </select>
      <select
        id="quantitySelect"
        className={styles.quantity}
        disabled={currentSize === ''}
        onChange={(e) => { quantitySelectedSwitchClick(e); }}
      >
        {qtyOptions().length === 0
          ? <option value="-">-</option>
          : qtyOptions().map((val, idx) => <option key={idx} value={val}>{val}</option>)}
      </select>
      <br />
      <div id="oopsSize" hidden={true} className={styles.oopsSize}>Please select size</div>
      <input type="submit" id="addToCart" hidden={false} className={styles.submit} onClick={(e) => { addToCart(e); }} value="ADD TO BAG" />
      <input type="submit" disabled={true} className={styles.whatIsThis} value="Wut?" />
    </form>
  );
};

export default OverviewCart;
