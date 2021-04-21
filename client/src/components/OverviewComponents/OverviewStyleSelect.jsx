import React from 'react';
import styles from '../../css-modules/overview-style-select.module.css';

const OverviewStyleSelect = (props) => {
  const {
    data,
    styleSelectSwitchClick,
    dataCurrentStyleName,
    dataSelected,
  } = props;
  return (
    <div>
      <div>
        <b>
          STYLE
          {' > '}
        </b>
        {dataCurrentStyleName}
      </div>
      {data.map((style, index) => {
        if (index === dataSelected) {
          return (
            <span key={index}>
              <img className={styles.thumbnail} src={style.photos[0].thumbnail_url} alt="" onClick={(e) => styleSelectSwitchClick(e, index)} />
            </span>
          );
        }
        return <img key={index} className={styles.thumbnail} src={style.photos[0].thumbnail_url} alt="" onClick={(e) => styleSelectSwitchClick(e, index)} />;
      })}
    </div>
  );
};

export default OverviewStyleSelect;
