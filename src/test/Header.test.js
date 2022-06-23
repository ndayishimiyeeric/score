import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Header from '../components/Header';

describe('Header render correctly', () => {
  test('detail Link', () => {
    const tree = renderer
      .create(<Router><Link to="/detail">detail</Link></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test Header', () => {
    const tree = renderer
      .create(<Router><Header /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
