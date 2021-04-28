import React, { useState } from 'react';
import StarRatings from './StarRatings';
import Characteristics from './Characteristics';
import { getStarRatings } from '../../../helpers/ratingsHelper';
import { postReview } from '../../../helpers/api';
import styles from '../css-modules/writeReview.module.css';

const WriteReview = (props) => {
  const {
    productName, productId, toggleModal, characteristics,
  } = props;

  const ratingDescriptions = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  };

  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  // const [recommend, setRecommend] = useState(false);
  const [inputFields, setInputFields] = useState({});
  const [property, setProperty] = useState({});
  const [body, setBody] = useState('');
  const [count, setCount] = useState(50);
  const [starCount, setStarCount] = useState(0);
  const [ratingsText, setRatingsText] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState({
    recommend: '',
    starRatings: '',
    body: '',
    isValid: true,
  });

  function changeStars(numOfStars) {
    setRatingsText(ratingDescriptions[numOfStars + 1]);
    setStarCount(numOfStars + 1);
  }

  function handleCharacteristics(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    setProperty({
      ...property,
      [name]: parseInt(value),
    });
  }

  function ChangeBody(event) {
    const { value } = event.target;
    setBody(value);
    if (value.length <= 50) {
      setCount(50 - value.length);
    }
  }

  function handleChange(event) {
    const { target } = event;
    let { value } = target;
    const { name } = target;
    if (name === 'recommend') {
      if (value === 'true') {
        value = true;
      } else {
        value =false;
      }
    }
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  }

  function isValidForm() {
    const errorInfo = {
      recommend: '',
      starRatings: '',
      body: '',
      isValid: true,
    };
    if (inputFields.recommend === undefined) {
      errorInfo.recommend = 'You must choose an option';
      errorInfo.isValid= false;
    }
    if (starCount === 0) {
      errorInfo.starRatings = 'You must select a star rating';
      errorInfo.isValid= false;
    }
    if (body.length < 50) {
      errorInfo.body = 'You must include a body';
      errorInfo.isValid= false;
    }
    setError({
      ...errorInfo,
    });

    return errorInfo;
  }

  function submit(event) {
    event.preventDefault();
    const message = isValidForm();
    if (message.isValid) {
      // valid form and can submit
      const data = {
        ...inputFields,
        product_id: productId,
        body,
        rating: starCount,
        characteristics: { ...property },
        photos: [...images],
      };
      if (!('summary' in data)) {
        data.summary = '';
      }
      postReview(data)
        .then((response) => console.log(response))
        .catch((err) => console.log(err.message));
      toggleModal();
    }
  }

  function addImage(event) {
    const currentImages = [...images];
    const { files } = event.target;
    const fileKeys = Object.keys(files);
    const remainder = 5 - currentImages.length;
    if (currentImages.length < 5) {
      for (let i = 0; i < fileKeys.length; i++) {
        currentImages.push(URL.createObjectURL(files[i]));
        if (i + 1 === remainder) {
          break;
        }
      }

      setImages([...currentImages]);
    }
  }

  const showBodyError = (!error.isValid && error.body) ? styles.error: '';
  const showStarRatingsError = (!error.isValid && error.starRatings) ? styles.error: '';
  const showRecommendError = (!error.isValid && error.recommend) ? styles.error: '';

  return (
    <div>

      <form onSubmit={submit} className={styles.formContainer}>
        <section className={styles.title}>
          <h2>{`Write Your Review about the ${productName}`}</h2>
        </section>
        <section className={styles.inputContainer}>
          <label htmlFor="nickname">Enter Name (Nickname)</label>
          <input
            type="text"
            name="name"
            required
            maxLength="60"
            placeholder="Example: jackson11!"
            onChange={handleChange}
            className={styles.textInput}
          />
          <span>For privacy reasons, do not use your full name or email address</span>
        </section>
        <section className={styles.inputContainer}>
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            name="email"
            size="30"
            maxLength="60"
            required
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Example: jackson11@email.com"
            onChange={handleChange}
            className={styles.textInput}
          />
          <span>For authentication reasons, you will not be emailed</span>
        </section>
        <section className={styles.inputContainer}>
          <label htmlFor="summary">Write Summary:</label>
          <input
            type="text"
            name="summary"
            size="30"
            maxLength="60"
            placeholder="Example: Best purchase ever!"
            onChange={handleChange}
            className={styles.textInput}
          />
        </section>
        <section className={styles.inputContainer}>
          <div className={showBodyError}>Write body</div>
          <textarea
            rows="3"
            type="text"
            name="body"
            required
            id="body"
            minLength="50"
            maxLength="1000"
            value={body}
            placeholder="Example: Why did you like the product or not"
            onChange={ChangeBody}
            className={styles.textArea}
          />
          {count > 0 ? (
            <p>
              Minimum required characters left:
              {' '}
              {count}
            </p>
          ) : (
            <p>Minium reached</p>
          )}
        </section>
        <section className={styles.inputContainer}>
          <span className={showStarRatingsError}>Overall Rating</span>
          <div className={styles.star}>
            {getStarRatings(starCount).map((star, _) => (
              <span key={_} onClick={(() => changeStars(_))}>
                {star}
              </span>
            ))}
            <p>{ratingsText}</p>
          </div>
        </section>
        <section className={styles.inputContainer}>
          <p className={showRecommendError}>Do you recommend this product?</p>
          <div className={styles.star}>
            <input type="radio" id="yes" name="recommend" value={true} onChange={handleChange} />
            <label htmlFor="yes" className={styles.recommend}>Yes</label>
            <input type="radio" id="no" name="recommend" value={false} onChange={handleChange} />
            <label htmlFor="no">No</label>
          </div>
        </section>
        <section className={styles.inputContainer}>
          <p>Characteristics</p>
          {Object.keys(characteristics).map((key) => (
            <div key={characteristics[key].id}>
              <Characteristics
                name={key}
                characteristic={characteristics[key]}
                handleCharacteristics={handleCharacteristics}
              />
            </div>
          ))}
        </section>
        <section className={styles.inputContainer}>
          <input className={styles.file} type="file" multiple onChange={addImage} accept="image/*" />
          <div className={styles.container}>
            {images.map((image, _) => (
              <div
                key={_}
                className={styles.imageWrapper}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </section>
        <section className={styles.submitContainer}>
          <input type="submit" value="Submit" className={styles.submit} />
        </section>
      </form>
    </div>
  );
};

export default WriteReview;
