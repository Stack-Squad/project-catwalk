import React from 'react';
import styles from '../../css-modules/overview-product-info.module.css';

const OverviewProductInfo = (props) => {
  const {
    infoData,
    stars,
    actualPrice,
    amountOfReviews,
  } = props;

  const defaultOrChange = () => {
    if (infoData.default_price !== actualPrice) {
      return (
        <div className={styles.price}>
          <div style={{ textDecoration: 'line-through' }}>{`$${infoData.default_price}`}</div>
          <div style={{ color: 'red' }}>{`$${actualPrice}`}</div>
        </div>
      );
    }
    return <div className={styles.price}>{`$${infoData.default_price}`}</div>;
  };

  const smoothScrollClick = (e) => {
    e.preventDefault();
    const rateAndRev = document.getElementById('ratings-reviews');
    rateAndRev.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderReviewsOrNo = () => {
    if (amountOfReviews) {
      return (
        <div className={styles.rating}>
          {stars.map((star, index) => <span key={index}>{star}</span>)}
          {/* {stars.map((star, index) => <div key={index}>{star}</div>)} */}
          <a style={{ marginTop: '0.25%' }} href="#ratings-reviews" onClick={(e) => smoothScrollClick(e)}>{`Read all ${amountOfReviews} reviews`}</a>
        </div>
      );
    }
    return <div>[No reviews for this product]</div>;
    // placeholder for now to visualize truthiness of no reviews
  };

  return (
    <div className={styles.productInfoLayout}>
      {renderReviewsOrNo()}
      <div className={styles.category}>{infoData.category}</div>
      <div className={styles.name}>{infoData.name}</div>
      {defaultOrChange()}
      <div className={styles.slogan}>
        {`?Product Overview?: "${infoData.slogan}"`}
        {/* ^ using the slogan property from productById for this ^ */}
        {' <-- Not on wireframe, although it is in biz docs'}
      </div>
      <div className={styles.share}>
        <button className={styles.shareButton}>Facebook</button>
        <button className={styles.shareButton}>Twitter</button>
        <button className={styles.shareButton}>Pinterest</button>
        {' <-- Implement Share Functionality.'}
      </div>
    </div>
  );
};

export default OverviewProductInfo;
