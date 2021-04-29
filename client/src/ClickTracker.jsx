/* eslint-disable class-methods-use-this */
import React from 'react';
import App from './App';

const ClickTracker = (Component) => class Clicker extends React.Component {
  handleClick(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log(event.target.closest());
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
