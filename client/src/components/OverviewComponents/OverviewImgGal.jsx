import React from 'react';
import styles from '../../css-modules/overview-image-gallery.module.css';

const OverviewImgGal = (props) => {
  const renderMoreButton = (length) => {
    if (length > 4) {
      return (
        <button onClick={(e) => props.galleryScrollClick(e)}>
          Click for
          <br />
          more!
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
        <button onClick={(e) => props.nextAndPrevious(e, 'previous')}>Prev?</button>
        <button onClick={(e) => props.nextAndPrevious(e, 'next')}>Next?</button>
      </div>
      <button className={styles.view} onClick={(e) => props.viewSwitchClick(e)}>Full?</button>
    </div>
  );
};

export default OverviewImgGal;
