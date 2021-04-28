import React, { useState } from 'react';
import styles from '../css-modules/reviewImages.module.css';

const ReviewImages = (props) => {
  const { images } = props;
  const [display, setDisplay] = useState('none');
  const [selectedImage, setSelectedImage] = useState('');

  function toggle(imageUrl=undefined) {
    if (imageUrl) {
      setDisplay('block');
      setSelectedImage(imageUrl);
    } else {
      setDisplay('none');
      setSelectedImage('');
    }
  }

  return (
    <>
      <div
        onClick={() => toggle()}
        style={{ display }}
        className={styles.overlay}
      >
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${selectedImage})` }}
        />
      </div>
      <div className={styles.container}>
        {images.filter((image) => image.url.includes('http'))
          .map((image) => (
            <div
              onClick={() => toggle(image.url)}
              key={image.id}
              className={styles.imageWrapper}
              style={{ backgroundImage: `url(${image.url})` }}
            />
          ))}
      </div>
    </>
  );
};

export default ReviewImages;
