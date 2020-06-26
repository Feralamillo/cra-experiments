import React from 'react';
import { shallow } from 'enzyme';

import { Card } from '../card';

test('renders the component', () => {
  const wrapper = shallow(<Card />);

  expect(wrapper).toMatchSnapshot();
});
