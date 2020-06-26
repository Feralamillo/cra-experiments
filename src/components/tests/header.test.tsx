import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../header';

test('renders the component', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});
