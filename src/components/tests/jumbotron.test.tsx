import React from 'react';
import { shallow } from 'enzyme';

import { Jumbotron } from '../jumbotron';

test('renders the component', () => {
  const wrapper = shallow(<Jumbotron />);

  expect(wrapper).toMatchSnapshot();
});
