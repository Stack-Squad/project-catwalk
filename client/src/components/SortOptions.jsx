import React, { useState, useEffect} from 'react';


const SortOptions = (props) => {
  const {setSortBy} = props;

  function handleChange(event) {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <p>
        248 reviews, sorted by
        <select name="sort-by" id="sort-by" onChange={handleChange}>
          <option value='relevance'>Relevance</option>
          <option value='helpful'>Helpful</option>
          <option value='newest'>Newest</option>
        </select>
      </p>
    </div>
  );
};

export default SortOptions;