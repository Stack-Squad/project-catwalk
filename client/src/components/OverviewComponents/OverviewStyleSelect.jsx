import React from 'react';
import styles from '../../css-modules/overview-style-select.module.css';

const OverviewStyleSelect = (props) => {
  const { data } = props;
  return (
    <div>
      <div>
        <b>
          STYLE
          {' > '}
        </b>
        [insert current style here]
      </div>
      {data.map((style, index) => <img key={index} className={styles.thumbnail} src={style.photos[0].thumbnail_url} alt="" />)}
    </div>
  );
};

export default OverviewStyleSelect;
