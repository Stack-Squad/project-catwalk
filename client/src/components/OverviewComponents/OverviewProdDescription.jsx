import React from 'react';
import styles from '../../css-modules/overview-prod-description.module.css';

const OverviewProdDescription = (props) => {
  const { infoData } = props;

  return (
    <div className={styles.prodDescriptionLayout}>
      <div className={styles.description}>Description</div>
      <ul className={styles.features}>Features</ul>
    </div>
  );
};

export default OverviewProdDescription;
