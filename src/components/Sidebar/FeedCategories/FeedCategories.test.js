// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import FeedCategories from './FeedCategories';

describe('FeedCategories', () => {
  const props = {
    categories: [
      {
        name: 'test_0',
        slug: '/test_0'
      },
      {
        name: 'test_1',
        slug: '/test_1'
      }
    ]
  };

  it('renders correctly', () => {
    const tree = renderer.create(<FeedCategories {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
