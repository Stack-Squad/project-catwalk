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
      <div className={styles.slogan}>{`"${infoData.slogan}"`}</div>
      <div id="shareButtons" className={styles.share}>
        <iframe className="shareButton" title="share" src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2F127.0.0.1%3A3000%2F&layout=button&size=small&width=67&height=20&appId" width="67" height="20" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" />
        <a className="shareButton" href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Tweet</a>
        <a className="shareButton" data-pin-do="buttonBookmark" data-pin-lang="en" href="https://www.pinterest.com/pin/create/button/">Save</a>
      </div>
    </div>
  );
};

export default OverviewProductInfo;
