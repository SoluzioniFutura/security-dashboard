import React from 'react';
import List from '../components/List';
import renderer from 'react-test-renderer';
import testList from './data/testList.json';

it('Navbar renders correctly', () => {
  const tree = renderer.create(<List list={testList}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
