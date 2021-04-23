import React, { useState, useEffect } from 'react';
import styles from '../css-modules/sortOptions.module.css';

const SortOptions = (props) => {
  const { setSortBy, reviewCount } = props;
  const soFar = reviewCount[0];
  const total = reviewCount[1];

  function handleChange(event) {
    setSortBy(event.target.value);
  }

  return (
    <div className={styles.container}>
      <div>
        {soFar < total
          ? (
            <span>
              Showing
              {' '}
              {soFar}
              {' '}
              out of
              {' '}
              {total}
              {' '}
              reviews
            </span>
          )
          : (
            <span>
              Showing
              {' '}
              {total}
              {' '}
              reviews
            </span>
          ) }
        <span>, sorted by</span>
        <select name="sort-by" id="sort-by" onChange={handleChange}>
          <option value="relevance">Relevance</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
};

export default SortOptions;
