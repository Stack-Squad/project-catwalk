import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ClickTracker from './ClickTracker';

// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(
  React.createElement(ClickTracker(App)),
  document.getElementById('app'),
);
