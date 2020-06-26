import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from '../footer';

test('renders the component', () => {
  const wrapper = shallow(<Footer />);

  expect(wrapper).toMatchSnapshot();
});
