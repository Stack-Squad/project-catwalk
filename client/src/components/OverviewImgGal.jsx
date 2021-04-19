import React from 'react';
import styles from '../css-modules/overview-image-gallery.module.css';

const OverviewImgGal = () => (
  <div className={styles.imageGallery}>
    <div className={styles.gallery}>Gallery</div>
    <div className={styles.image}>Image</div>
    <div className={styles.switchImage}>Image Switch</div>
    <div className={styles.view}>View Switch</div>
  </div>
);

export default OverviewImgGal;