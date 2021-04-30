import React from 'react';
import styles from '../../css-modules/overview-prod-description.module.css';

const OverviewProdDescription = (props) => {
  const { infoData } = props;

  return (
    <div className={styles.prodDescriptionLayout}>
      <div className={styles.description}>
        <div style={{ fontWeight: 'bolder', fontSize: 'large' }}>{infoData.slogan}</div>
        <br />
        <div>{infoData.description}</div>
      </div>
      <div className={styles.features}>
        {infoData.features.map((featureObj, index) => <div key={index}>{`${featureObj.feature}: ${featureObj.value}`}</div>)}
      </div>
    </div>
  );
};

export default OverviewProdDescription;
