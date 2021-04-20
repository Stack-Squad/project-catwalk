import React from 'react';
import styles from '../../css-modules/overview-image-gallery.module.css';

const OverviewImgGal = (props) => {
  let renderButton = (length) => {
    if (length > 4) {
      return (
        <button onClick={(e) => props.galleryScrollClick(e)}>Click for<br></br>more!</button>
      );
    }
  };
  return (
    <div className={styles.imageGallery}>
      <div id="gallery" className={styles.gallery}>
        {props.currentSelectedStyleImages.map((image, index) => {
          if (index >= props.currentPointInGalleryStart && index < props.currentPointInGalleryEndNonInclusive) {
            return <div key={index}><img className={styles.thumbnail} src={image['thumbnail_url']} key={index}></img></div>;
          }
        })}
        {renderButton(props.currentGalleryLength)}
      </div>
      <img src={props.currentImg} className={styles.image}></img>
      <div className={styles.switchImage}>Image Switch</div>
      <div className={styles.view}>View Switch</div>
    </div>
  );
};

export default OverviewImgGal;