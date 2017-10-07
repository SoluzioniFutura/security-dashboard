import React from 'react';
import Navbar from '../components/Navbar';
import renderer from 'react-test-renderer';

it('Navbar renders correctly', () => {
  const tree = renderer.create(
    <div>
      <Navbar/>
    </div>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
