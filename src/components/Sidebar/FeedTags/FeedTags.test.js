// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import FeedCategories from './FeedTags';

describe('FeedTags', () => {
  const props = {
    tags: [
      {
        fieldValue: 'test_0',
        slug: '/test_0',
        totalCount: 2
      },
      {
        fieldValue: 'test_1',
        slug: '/test_1',
        totalCount: 2
      }
    ]
  };

  it('renders correctly', () => {
    const tree = renderer.create(<FeedCategories {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
