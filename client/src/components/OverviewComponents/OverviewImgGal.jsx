import React from 'react';
import styles from '../../css-modules/overview-image-gallery.module.css';

const OverviewImgGal = (props) => (
  <div className={styles.imageGallery}>
      {props.currentSelectedStyleImages.map((image, index) => {
        return <img src={image['thumbnail_url']}></img>
      })}
    <img src={props.currentImg} className={styles.image}></img>
    <div className={styles.switchImage}>Image Switch</div>
    <div className={styles.view}>View Switch</div>
  </div>
);

export default OverviewImgGal;