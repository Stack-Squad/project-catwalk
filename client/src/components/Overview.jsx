/* eslint-disable */
// ESLint's current rules want me to basically break my functionality. Const cannot work for this.
// I may try to make it work, but I cannot have this happening right now.
import React from 'react';
import axios from 'axios';

import OverviewImgGal from './OverviewComponents/OverviewImgGal';
import OverviewStyleSelect from './OverviewComponents/OverviewStyleSelect';
import OverviewProductInfo from './OverviewComponents/OverviewProductInfo';
import OverviewCart from './OverviewComponents/OverviewCart';
import OverviewProdDescription from './OverviewComponents/OverviewProdDescription';

import layoutStyles from '../css-modules/overview-layout.module.css';

import sampleData from '../../../helpers/sampleData';

import { getAverageRatings, getStarRatings } from '../../../helpers/ratingsHelper';

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      ////// state related to image gallery mostly //////
      currentImg: sampleData.productStylesById.results[0].photos[0].url,
      // the currently selected photo from currentSelectedStyleImages reference
      currentSelectedStyleImages: sampleData.productStylesById.results[0].photos,
      // reference from the current style's photos
      currentPointInGallery: 0,
      currentPointInGalleryStart: 0,
      currentPointInGalleryEndNonInclusive: 5,
      currentGalleryLength: sampleData.productStylesById.results[0].photos.length,
      // length of currentSelectedStyleImages reference
      currentView: 'regular',
      ////// state related to style selector //////
      data: sampleData.productStylesById.results,
      dataCurrentStyleName: sampleData.productStylesById.results[0].name,
      dataSelected: 0,
      ////// state related to product info //////
      infoData: sampleData.productById,
      stars: getStarRatings(getAverageRatings(sampleData.reviewMetaData.ratings)),
      actualPrice: sampleData.productStylesById.results[0].sale_price ? sampleData.productStylesById.results[0].sale_price : sampleData.productStylesById.results[0].original_price,
      amountOfReviews: sampleData.reviewList.count,
      ////// state related to cart //////
      currentStyle: sampleData.productStylesById.results[0],
      currentSize: '',
      currentQuantity: 0,
    };
    ////// image gallery functionality //////
    this.galleryScrollClick = this.galleryScrollClick.bind(this);
    this.galleryImageClick = this.galleryImageClick.bind(this);
    this.nextAndPrevious = this.nextAndPrevious.bind(this);
    this.viewSwitchClick = this.viewSwitchClick.bind(this);
    ////// style selector functionality //////
    this.styleSelectSwitchClick = this.styleSelectSwitchClick.bind(this);
    ////// cart functionality  //////
    this.sizeSelectedSwitchClick = this.sizeSelectedSwitchClick.bind(this);
    this.quantitySelectedSwitchClick = this.quantitySelectedSwitchClick.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  // image gallery functionality

  galleryScrollClick(e) {
    if (this.state.currentPointInGalleryEndNonInclusive < this.state.currentGalleryLength) {
      this.state.currentPointInGalleryStart += 5;
      this.state.currentPointInGalleryEndNonInclusive += 5;
    } else {
      this.state.currentPointInGalleryStart = 0;
      this.state.currentPointInGalleryEndNonInclusive = 5;
    }
    document.getElementById('gallery').value = '';
    this.setState({
      currentPointInGalleryStart: this.state.currentPointInGalleryStart,
      currentPointInGalleryEndNonInclusive: this.state.currentPointInGalleryEndNonInclusive
    });
  }

  galleryImageClick(e, index) {
    this.state.currentPointInGallery = index;
    this.setState({
      currentPointInGallery: this.state.currentPointInGallery,
      currentImg: this.state.currentSelectedStyleImages[this.state.currentPointInGallery].url
    });
  }

  nextAndPrevious(e, option) {
    if (this.state.currentPointInGallery < this.state.currentGalleryLength - 1 && option === 'next') {
      this.state.currentPointInGallery += 1;
      if (this.state.currentPointInGallery > this.state.currentPointInGalleryEndNonInclusive - 1) {
        this.state.currentPointInGalleryStart += 5;
        this.state.currentPointInGalleryEndNonInclusive += 5;
      }
    } else if (this.state.currentPointInGallery === this.state.currentGalleryLength - 1 && option === 'next') {
      this.state.currentPointInGallery = 0;
      this.state.currentPointInGalleryStart = 0;
      this.state.currentPointInGalleryEndNonInclusive = 5;
    } else if (this.state.currentPointInGallery > 0 && option === 'previous') {
      this.state.currentPointInGallery -= 1;
      if (this.state.currentPointInGallery < this.state.currentPointInGalleryStart) {
        this.state.currentPointInGalleryStart -= 5;
        this.state.currentPointInGalleryEndNonInclusive -= 5;
      }
    } else {
      this.state.currentPointInGallery = this.state.currentGalleryLength - 1;
      this.state.currentPointInGalleryEndNonInclusive = Math.ceil(this.state.currentGalleryLength / 5) * 5;
      this.state.currentPointInGalleryStart = this.state.currentPointInGalleryEndNonInclusive - 5;
    }
    this.setState({
      currentPointInGallery: this.state.currentPointInGallery,
      currentImg: this.state.currentSelectedStyleImages[this.state.currentPointInGallery].url
    });
  }

  viewSwitchClick(e) {
    if (e.target.innerHTML === 'Full?') {
      e.target.innerHTML = 'Regular?';
      this.state.currentView = 'full';
    } else {
      e.target.innerHTML = 'Full?';
      this.state.currentView = 'regular';

    }
    this.setState({
      currentView: this.state.currentView
    });
  }

  // style selector functionality

  styleSelectSwitchClick(e, index) {
    this.state.currentImg = sampleData.productStylesById.results[index].photos[0].url;
    this.state.currentSelectedStyleImages = sampleData.productStylesById.results[index].photos;
    this.state.currentGalleryLength = this.state.currentSelectedStyleImages.length;
    this.state.dataCurrentStyleName = sampleData.productStylesById.results[index].name;
    this.state.dataSelected = index;
    this.state.currentStyle = sampleData.productStylesById.results[index];
    this.state.currentSize = '';
    document.getElementById('cart').reset();
    // change for price
    this.state.actualPrice = sampleData.productStylesById.results[index].sale_price ? sampleData.productStylesById.results[index].sale_price : sampleData.productStylesById.results[index].original_price;
    this.setState({
      currentImg: this.state.currentImg,
      currentSelectedStyleImages: this.state.currentSelectedStyleImages,
      currentGalleryLength: this.state.currentSelectedStyleImages.length,
      currentPointInGallery: 0,
      currentPointInGalleryStart: 0,
      currentPointInGalleryEndNonInclusive: 5,
      dataCurrentStyleName: this.state.dataCurrentStyleName,
      dataSelected: this.state.dataSelected,
      actualPrice: this.state.actualPrice, // for price changes
      currentStyle: this.state.currentStyle,
      currentSize: this.state.currentSize,
    });
  }

  // cart functionality

  sizeSelectedSwitchClick(e) {
    this.state.currentSize = e.target.value;
    this.state.currentQuantity = 1;
    this.setState({
      currentSize: this.state.currentSize,
      currentQuantity: this.state.currentQuantity,
    });
  }

  quantitySelectedSwitchClick(e) {
    this.state.currentQuantity = e.target.value;
    this.setState({
      currentQuantity: this.state.currentQuantity
    });
  }

  addToCart(e) {
    e.preventDefault();
    if (this.state.currentSize === '' || this.state.currentSize === 'Select Size') {
      document.getElementById('oopsSize').hidden = false;
      let sizeSelect = document.getElementById('sizeSelect');
      let length = sizeSelect.options.length;
      sizeSelect.size = length;
      return;
    }
    document.getElementById('oopsSize').hidden = true;
    let sizeSelect = document.getElementById('sizeSelect');
    sizeSelect.size = 0;
    let skuId = '';
    for (const sku in this.state.currentStyle.skus) {
      // console.log(sku);
      // console.log(this.state.currentStyle.skus[sku]);
      // console.log(this.state.currentStyle.skus[sku].size);
      if (this.state.currentSize === this.state.currentStyle.skus[sku].size) {
        // console.log('THIS ONE -->', sku);
        skuId = sku;
      }
    }
    axios.post(`/cart/${skuId}`)
      .then((response) => {
        axios.get('/cart')
          .then((res) => alert('Your cart: ' + JSON.stringify(res.data)))
          .catch((error) => alert('An error in getting your cart, we have for you: ', error));
      })
      .catch((error) => alert('An error in adding your item(s) to cart, there was. Error, here is: ', error));
  }

  // <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  // <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
  componentDidUpdate (prevProps, prevState) {
    const scriptTwitter = document.createElement("script");
    scriptTwitter.src = "https://platform.twitter.com/widgets.js";
    scriptTwitter.async = true;
    scriptTwitter.charset = "utf-8";
    document.head.appendChild(scriptTwitter);
    // const scriptPinterest = document.createElement("script");
    // scriptPinterest.async = true;
    // scriptPinterest.defer = true;
    // scriptPinterest.src = "//assets.pinterest.com/js/pinit.js";
    // document.head.appendChild(scriptPinterest);
  }

  render() {
    if (this.state.currentView === 'regular') {
      return (
        <div className={layoutStyles.overviewLayout}>
          <OverviewImgGal
            className={layoutStyles.imageGalleryComp}
            currentImg={this.state.currentImg}
            currentSelectedStyleImages={this.state.currentSelectedStyleImages}
            galleryScrollClick={this.galleryScrollClick}
            currentPointInGalleryStart={this.state.currentPointInGalleryStart}
            currentPointInGalleryEndNonInclusive={this.state.currentPointInGalleryEndNonInclusive}
            currentGalleryLength={this.state.currentGalleryLength}
            nextAndPrevious={this.nextAndPrevious}
            currentPointInGallery={this.state.currentPointInGallery}
            galleryImageClick={this.galleryImageClick}
            viewSwitchClick={this.viewSwitchClick}
            currentView={this.state.currentView}
          />
          <div className={layoutStyles.infoStyleCart}>
            <OverviewProductInfo
              className={layoutStyles.productInfoComp}
              infoData={this.state.infoData}
              stars={this.state.stars}
              actualPrice={this.state.actualPrice}
              amountOfReviews={this.state.amountOfReviews}
            />
            <OverviewStyleSelect
              className={layoutStyles.styleSelectorComp}
              data={this.state.data}
              dataCurrentStyleName={this.state.dataCurrentStyleName}
              styleSelectSwitchClick={this.styleSelectSwitchClick}
              dataSelected={this.state.dataSelected}
            />
            <OverviewCart
              className={layoutStyles.cartComp}
              currentStyle={this.state.currentStyle}
              sizeSelectedSwitchClick={this.sizeSelectedSwitchClick}
              currentSize={this.state.currentSize}
              quantitySelectedSwitchClick={this.quantitySelectedSwitchClick}
              currentQuantity={this.state.currentQuantity}
              addToCart={this.addToCart}
            />
          </div>
          <OverviewProdDescription infoData={this.state.infoData}/>
        </div>
      );
    }
    return (
      <div className={layoutStyles.overviewLayoutIfFull}>
        <OverviewImgGal
          className={layoutStyles.imageGalleryCompIfFull}
          currentImg={this.state.currentImg}
          currentSelectedStyleImages={this.state.currentSelectedStyleImages}
          galleryScrollClick={this.galleryScrollClick}
          currentPointInGalleryStart={this.state.currentPointInGalleryStart}
          currentPointInGalleryEndNonInclusive={this.state.currentPointInGalleryEndNonInclusive}
          currentGalleryLength={this.state.currentGalleryLength}
          nextAndPrevious={this.nextAndPrevious}
          currentPointInGallery={this.state.currentPointInGallery}
          galleryImageClick={this.galleryImageClick}
          viewSwitchClick={this.viewSwitchClick}
          currentView={this.state.currentView}
        />
        <OverviewProdDescription className={layoutStyles.productDescriptionCompIfFull} />
      </div>
    );
  }
}
export default Overview;
