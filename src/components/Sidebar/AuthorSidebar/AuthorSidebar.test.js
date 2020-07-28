// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import AuthorSidebar from './AuthorSidebar';

describe('AuthorSidebar', () => {
  const props = {
    author: {
      name: 'test',
      photo: '/carl-photo-social.jpg',
      bio: 'test'
    },
    isIndex: false
  };

  it('renders correctly', () => {
    const tree = renderer.create(<AuthorSidebar {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
