import React from 'react';
import styles from '../css-modules/product-breakdown.module.css';
import { getCharacteristicOptions } from '../../../helpers/ratingsHelper';

const ProductBreakdown = (props) => {
  const { characteristics } = props;

  return (
    <div className={styles.container}>
      { Object.keys(characteristics).map((key, _) => {
        const options = getCharacteristicOptions(key);
        const value = Math.round(parseFloat(characteristics[key].value) * 10) / 10;
        return (
          <div key={_} className={styles.breakdown}>
            <p>
              {key}
            </p>
            <div>
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={value}
                readOnly={true}
                className={styles.slider}
              />
            </div>
            <div className={styles.options}>
              <span className={styles.option}>{options[0]}</span>
              <span className={styles.option}>{options[1]}</span>
              <span className={styles.option}>{options[2]}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductBreakdown;
