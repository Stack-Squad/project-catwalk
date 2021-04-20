import React from 'react';
import OverviewImgGal from './OverviewComponents/OverviewImgGal.jsx'

import sampleData from '../../../helpers/sampleData.js';

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      data: sampleData.productStylesById.results, // just here for now, not useful yet, not sure if it will be
      currentImg: sampleData.productStylesById.results[0].photos[0].url, // the currently selected photo from currentSelectedStyleImages reference
      currentSelectedStyleImages: sampleData.productStylesById.results[0].photos, // reference from the current style's photos (CURRENTLY HARDCODED TO BE WORKING WITH ONE STYLE)
      currentPointInGallery: 0,
      currentPointInGalleryStart: 0,
      currentPointInGalleryEndNonInclusive: 5,
      currentGalleryLength: sampleData.productStylesById.results[0].photos.length // length of currentSelectedStyleImages reference
    }
    this.galleryScrollClick = this.galleryScrollClick.bind(this);
    this.nextAndPrevious = this.nextAndPrevious.bind(this);
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
      currentImg: sampleData.productStylesById.results[0].photos[this.state.currentPointInGallery].url
    });
  }

  render() {
    return (
      <div>
        <OverviewImgGal currentImg={this.state.currentImg} currentSelectedStyleImages={this.state.currentSelectedStyleImages} galleryScrollClick={this.galleryScrollClick} currentPointInGalleryStart={this.state.currentPointInGalleryStart} currentPointInGalleryEndNonInclusive={this.state.currentPointInGalleryEndNonInclusive} currentGalleryLength={this.state.currentGalleryLength} nextAndPrevious={this.nextAndPrevious} currentPointInGallery={this.state.currentPointInGallery} />
      </div>
    )
  }
}
export default Overview