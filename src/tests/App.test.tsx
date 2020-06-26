import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../App';

jest.mock('../components/header', () => ({
  Header: 'mock-header',
}));
jest.mock('../components/main', () => ({
  Main: 'mock-main',
}));
jest.mock('../components/footer', () => ({
  Footer: 'mock-footer',
}));

test('renders the component', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
