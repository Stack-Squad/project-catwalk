import React from 'react';
import OverviewImgGal from './OverviewImgGal.jsx'

import sampleData from '../../../helpers/sampleData.js';

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      data: sampleData.productStylesById.results,
      currentImg: sampleData.productStylesById.results[0].photos[0].url,
      currentSelectedStyleImages: sampleData.productStylesById.results[0].photos
    }
  }
  render() {
    return (
      <div>
        <OverviewImgGal currentImg={this.state.currentImg} currentSelectedStyleImages={this.state.currentSelectedStyleImages}/>
      </div>
    )
  }
}
export default Overview