import { shallow } from 'enzyme';
import React from 'react';

import App from '../client/src/App.jsx';
import Banner from '../client/src/components/Banner.jsx';

test("renders App component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.html()).toEqual('<div><header>Project Catwalk</header></div>');
});

test("renders Banner component ", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Banner)).toHaveLength(1);
});