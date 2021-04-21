import React from 'react';
import OverviewImgGal from './OverviewComponents/OverviewImgGal.jsx';

import layoutStyles from '../css-modules/overview-layout.module.css';

import sampleData from '../../../helpers/sampleData.js';

class Overview extends React.Component {
  constructor() {
    super();
    this.state = { // REFACTOR FOR STYLE CHANGES
      data: sampleData.productStylesById.results, // just here for now, not useful yet, not sure if it will be
      currentImg: sampleData.productStylesById.results[0].photos[0].url, // the currently selected photo from currentSelectedStyleImages reference
      currentSelectedStyleImages: sampleData.productStylesById.results[0].photos, // reference from the current style's photos (CURRENTLY HARDCODED TO BE WORKING WITH ONE STYLE)
      currentPointInGallery: 0,
      currentPointInGalleryStart: 0,
      currentPointInGalleryEndNonInclusive: 5,
      currentGalleryLength: sampleData.productStylesById.results[0].photos.length, // length of currentSelectedStyleImages reference
      currentView: 'regular'
    }
    this.galleryScrollClick = this.galleryScrollClick.bind(this);
    this.galleryImageClick = this.galleryImageClick.bind(this);
    this.nextAndPrevious = this.nextAndPrevious.bind(this);
    this.viewSwitchClick = this.viewSwitchClick.bind(this);
  }

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
      currentImg: sampleData.productStylesById.results[0].photos[this.state.currentPointInGallery].url // REFACTOR FOR STYLE CHANGES
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
      currentImg: sampleData.productStylesById.results[0].photos[this.state.currentPointInGallery].url // REFACTOR FOR STYLE CHANGES
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

  render() {
    if (this.state.currentView === 'regular') {
      return (
        <div className={layoutStyles.overviewLayout}>
          <OverviewImgGal className={layoutStyles.imageGalleryComp} currentImg={this.state.currentImg} currentSelectedStyleImages={this.state.currentSelectedStyleImages} galleryScrollClick={this.galleryScrollClick} currentPointInGalleryStart={this.state.currentPointInGalleryStart} currentPointInGalleryEndNonInclusive={this.state.currentPointInGalleryEndNonInclusive} currentGalleryLength={this.state.currentGalleryLength} nextAndPrevious={this.nextAndPrevious} currentPointInGallery={this.state.currentPointInGallery} galleryImageClick={this.galleryImageClick} viewSwitchClick={this.viewSwitchClick} currentView={this.state.currentView} />
          <div className={layoutStyles.infoStyleCart}>
            <div className={layoutStyles.productInfoComp}>CSS Placement: Product Info</div>
            <div className={layoutStyles.styleSelectorComp}>CSS Placement: Style Select</div>
            <div className={layoutStyles.cartComp}>CSS Placement: Cart</div>
          </div>
          <div className={layoutStyles.productDescriptionComp}>CSS Placement: Product Description</div>
        </div>
      )
    } else {
      return (
        <div className={layoutStyles.overviewLayoutIfFull}>
          <OverviewImgGal className={layoutStyles.imageGalleryCompIfFull} currentImg={this.state.currentImg} currentSelectedStyleImages={this.state.currentSelectedStyleImages} galleryScrollClick={this.galleryScrollClick} currentPointInGalleryStart={this.state.currentPointInGalleryStart} currentPointInGalleryEndNonInclusive={this.state.currentPointInGalleryEndNonInclusive} currentGalleryLength={this.state.currentGalleryLength} nextAndPrevious={this.nextAndPrevious} currentPointInGallery={this.state.currentPointInGallery} galleryImageClick={this.galleryImageClick} viewSwitchClick={this.viewSwitchClick} currentView={this.state.currentView} />
          <div className={layoutStyles.productDescriptionCompIfFull}>CSS Placement: Product Description</div>
        </div>
      )
    }
  }
}
export default Overview