import React, { useState } from 'react';
import { getCharacteristicOptions } from '../../../helpers/ratingsHelper';
import styles from '../css-modules/product-breakdown.module.css';

const Characteristics = (props) => {
  const { name, characteristic, handleCharacteristics } = props;
  const options = getCharacteristicOptions(name);

  return (
    <div key={characteristic.id}>
      <section>
        <p>
          {name}
        </p>
      </section>
      <section>
        <input type="radio" id={`${name}-one`} name={characteristic.id} value="1" onChange={handleCharacteristics} />
        <label htmlFor={`${name}-one`}>1</label>
        <input type="radio" id={`${name}-two`} name={characteristic.id} value="2" onChange={handleCharacteristics} />
        <label htmlFor={`${name}-two`}>2</label>
        <input type="radio" id={`${name}-three`} name={characteristic.id} value="3" onChange={handleCharacteristics} />
        <label htmlFor={`${name}-three`}>3</label>
        <input type="radio" id={`${name}-four`} name={characteristic.id} value="4" onChange={handleCharacteristics} />
        <label htmlFor={`${name}-four`}>4</label>
        <input type="radio" id={`${name}-five`} name={characteristic.id} value="5" onChange={handleCharacteristics} />
        <label htmlFor={`${name}-five`}>5</label>

      </section>
      <section className={styles.options}>
        <span className={styles.option}>{options[0]}</span>
        <span className={styles.option}>{options[1]}</span>
        <span className={styles.option}>{options[2]}</span>
      </section>
    </div>
  );
};

export default Characteristics;
