import React from 'react';
import styles from '../../css-modules/overview-image-gallery.module.css';

const OverviewImgGal = (props) => (
  <div className={styles.imageGallery}>
    <div className={styles.gallery}>
      {props.currentSelectedStyleImages.map((image, index) => {
        return <div><img className={styles.thumbnail} src={image['thumbnail_url']} key={index}></img></div>
      })}
    </div>
    <img src={props.currentImg} className={styles.image}></img>
    <div className={styles.switchImage}>Image Switch</div>
    <div className={styles.view}>View Switch</div>
  </div>
);

export default OverviewImgGal;