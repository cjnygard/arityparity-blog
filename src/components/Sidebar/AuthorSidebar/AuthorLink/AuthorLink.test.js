// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import AuthorLink from './AuthorLink';

describe('AuthorLink', () => {
  const props = {
    author: {
      name: 'test',
      photo: '/carl-photo-social.jpg',
      bio: 'test'
    },
    isIndex: false
  };

  it('renders correctly', () => {
    const tree = renderer.create(<AuthorLink {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
