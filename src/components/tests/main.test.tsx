import React from 'react';
import { shallow } from 'enzyme';

import { Main } from '../main';

jest.mock('../jumbotron', () => ({
  Jumbotron: 'mock-jumbotron',
}));
jest.mock('../card', () => ({
  Card: 'mock-card',
}));

test('renders the component', () => {
  const wrapper = shallow(<Main />);

  expect(wrapper).toMatchSnapshot();
});
