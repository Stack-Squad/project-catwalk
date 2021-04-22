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
        <p style={{ fontWeight: 'bolder', display: 'inline' }}>
          {'STYLE > '}
        </p>
        {dataCurrentStyleName}
      </div>
      {data.map((style, index) => {
        if (index === dataSelected) {
          return (
            <span key={index} className={styles.thumbnailSelectedLayout}>
              <img className={styles.thumbnailSelected} src={style.photos[0].thumbnail_url} alt="" onClick={(e) => styleSelectSwitchClick(e, index)} />
              <span className={styles.checkmark} />
            </span>
          );
        }
        return (
          <span key={index} className={styles.thumbnailSelectedLayout}>
            <img className={styles.thumbnailSelected} src={style.photos[0].thumbnail_url} alt="" onClick={(e) => styleSelectSwitchClick(e, index)} />
          </span>
        );
      })}
    </div>
  );
};

export default OverviewStyleSelect;
