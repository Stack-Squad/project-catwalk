import { shallow } from 'enzyme';
import React from 'react';

import ReviewsButton from '../client/src/components/ReviewsButton.jsx';

test ("renders ReviewsButton component", () => {
  const wrapper = shallow(
    <ReviewsButton reviewCount={[2, 5]}
      moreReviews={undefined}/>);
    expect(wrapper.hasClass('container')).toEqual(true);
    expect(wrapper.find('div.container')).toHaveLength(1);
});