import React, { useState, useEffect } from 'react';
import styles from '../css-modules/sortOptions.module.css';

const SortOptions = (props) => {
  const { setSortBy } = props;

  function handleChange(event) {
    setSortBy(event.target.value);
  }

  return (
    <div className={styles.container}>
      <p>
        248 reviews, sorted by
        <select name="sort-by" id="sort-by" onChange={handleChange}>
          <option value="relevance">Relevance</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </p>
    </div>
  );
};

export default SortOptions;
