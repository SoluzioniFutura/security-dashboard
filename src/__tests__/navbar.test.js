import React from 'react';
import Navbar from '../components/NavBar';
import renderer from 'react-test-renderer';

it('Navbar renders correctly', () => {
  const tree = renderer.create(<Navbar/>).toJSON();
  expect(tree).toMatchSnapshot();
});
