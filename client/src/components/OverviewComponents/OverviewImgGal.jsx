import React from 'react';
import styles from '../../css-modules/overview-image-gallery.module.css';

const OverviewImgGal = (props) => {
  const renderMoreButton = (length) => {
    if (length > 4) {
      return (
        <button className={styles.nextPrev} onClick={(e) => props.galleryScrollClick(e)}>
          v
        </button>
      );
    }
  };
  const selectedStyle = {
    borderBottom: 'solid black',
  };
  const notSelectedStyle = {
    borderBottom: 'none',
  };
  const {
    currentView,
    currentImg,
    currentSelectedStyleImages,
    currentPointInGalleryStart,
    currentPointInGalleryEndNonInclusive,
    currentPointInGallery,
    currentGalleryLength,
    galleryImageClick,
  } = props;

  return (
    <div className={currentView === 'regular' ? styles.imageGallery : styles.imageGalleryIfFull}>
      <div id="gallery" className={styles.gallery}>
        {currentSelectedStyleImages.map((image, index) => {
          if (index >= currentPointInGalleryStart && index < currentPointInGalleryEndNonInclusive) {
            return <img key={index} className={currentView === 'regular' ? styles.thumbnail : styles.thumbnailIfFull} src={image.thumbnail_url} alt="" style={index === currentPointInGallery ? selectedStyle : notSelectedStyle} onClick={(e) => { galleryImageClick(e, index); }} />;
          }
        })}
        {renderMoreButton(currentGalleryLength)}
      </div>
      <img className={currentView === 'regular' ? styles.image : styles.imageIfFull} src={currentImg} alt="" />
      <div className={styles.switchImage}>
        <button className={styles.nextPrev} onClick={(e) => props.nextAndPrevious(e, 'previous')}>{'<'}</button>
        <button className={styles.nextPrev} onClick={(e) => props.nextAndPrevious(e, 'next')}>{'>'}</button>
      </div>
      <input type="image" className={styles.view} onClick={(e) => props.viewSwitchClick(e)} src="https://www.freeiconspng.com/uploads/full-screen-icon-png-29.png" alt="Expand Contract View" />
    </div>
  );
};

export default OverviewImgGal;
