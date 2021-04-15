import { shallow } from 'enzyme';
import React from 'react';

import App from '../client/src/App.jsx';

test("renders App component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.html()).toEqual('<div></div>');
});