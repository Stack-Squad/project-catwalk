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
  let selectedStyle = {
    'borderBottom': 'solid black',
    'marginBottom': '2%',
    'paddingBottom': '1%'
  }
  let notSelectedStyle = {
    'borderBottom': 'none'
  }
  return (
    <div className={styles.imageGallery}>
      <div id="gallery" className={styles.gallery}>
        {props.currentSelectedStyleImages.map((image, index) => {
          if (index >= props.currentPointInGalleryStart && index < props.currentPointInGalleryEndNonInclusive) {
            return <img key={index} className={styles.thumbnail} src={image['thumbnail_url']}  style={index === props.currentPointInGallery ? selectedStyle : notSelectedStyle}></img>;
          }
        })}
        {renderButton(props.currentGalleryLength)}
      </div>
      <img src={props.currentImg} className={styles.image}></img>
      <div className={styles.switchImage}>
        <button onClick={(e) => props.nextAndPrevious(e, 'previous')}>Previous?</button>
        <button style={{'marginLeft': '80%'}}onClick={(e) => props.nextAndPrevious(e, 'next')}>Next?</button>
      </div>
      <div className={styles.view}>View Switch</div>
    </div>
  );
};

export default OverviewImgGal;