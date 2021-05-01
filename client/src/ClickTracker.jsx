/* eslint-disable class-methods-use-this */
import React from 'react';
import App from './App';
import { parseDOM } from '../../helpers/ratingsHelper';

const ClickTracker = (Component) => class Clicker extends React.Component {
  handleClick(event) {
    parseDOM(event);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <Component />
      </div>
    );
  }
};

export default ClickTracker;
