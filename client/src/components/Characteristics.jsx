import React, { useState } from 'react';
import { getCharacteristicOptions } from '../../../helpers/ratingsHelper';
import styles from '../css-modules/characteristics.module.css';

const Characteristics = (props) => {
  const { name, characteristic, handleCharacteristics } = props;
  const options = getCharacteristicOptions(name);

  return (
    <div key={characteristic.id} className={styles.container}>
      <section className={styles.name}>
        <p>
          {name}
        </p>
      </section>
      <section className={styles.options}>
        <section>
          <input type="radio" id={`${name}-one`} name={characteristic.id} value="1" onChange={handleCharacteristics} />
          <label htmlFor={`${name}-one`} className={styles.label}>1</label>
        </section>
        <section>
          <input type="radio" id={`${name}-two`} name={characteristic.id} value="2" onChange={handleCharacteristics} />
          <label htmlFor={`${name}-two`} className={styles.label}>2</label>
        </section>
        <section>
          <input type="radio" id={`${name}-three`} name={characteristic.id} value="3" onChange={handleCharacteristics} />
          <label htmlFor={`${name}-three`} className={styles.label}>3</label>
        </section>
        <section>
          <input type="radio" id={`${name}-four`} name={characteristic.id} value="4" onChange={handleCharacteristics} />
          <label htmlFor={`${name}-four`} className={styles.label}>4</label>
        </section>
        <section>
          <input type="radio" id={`${name}-five`} name={characteristic.id} value="5" onChange={handleCharacteristics} />
          <label htmlFor={`${name}-five`} className={styles.label}>5</label>
        </section>
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
