import React from 'react';
import OverviewImgGal from './OverviewImgGal.jsx'

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      truth: true
    }
  }
  render() {
    return (
      <div>
        <OverviewImgGal />
      </div>
    )
  }
}
export default Overview