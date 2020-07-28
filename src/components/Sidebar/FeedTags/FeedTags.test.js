// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import FeedCategories from './FeedTags';

describe('FeedTags', () => {
  const props = {
    tags: [
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
