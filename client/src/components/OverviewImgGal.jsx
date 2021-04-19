import React from 'react';
import styles from '../css-modules/overview-image-gallery.module.css';

const OverviewImgGal = (props) => (
  <div className={styles.imageGallery}>
    <img src={props.currentSelectedStyleImages[0]['thumbnail_url']} className={styles.gallery}></img> {/* need to make dynamic render of all images*/}
    <img src={props.currentImg} className={styles.image}></img>
    <div className={styles.switchImage}>Image Switch</div>
    <div className={styles.view}>View Switch</div>
  </div>
);

export default OverviewImgGal;