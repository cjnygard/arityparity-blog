// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import AuthorFooter from './AuthorFooter';
import siteMetadata from '../../../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../../../types';

describe('AuthorFooter', () => {
  const props = {
    author: {
      id: 'foobar',
      name: 'test',
      photo: '/foobar-photo-social.jpg',
      bio: 'test',
      contacts: {
        email: 'foobar',
        facebook: 'foobar',
        telegram: 'foobar',
        twitter: 'foobar',
        github: 'foobar',
        rss: 'foobar',
        vkontakte: 'foobar',
        linkedin: 'foobar',
        instagram: 'foobar',
        line: 'foobar',
        gitlab: 'foobar',
        weibo: 'foobar',
        codepen: 'foobar',
        youtube: 'foobar',
        soundcloud: 'foobar'
      }
    },
    isIndex: false
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AuthorFooter {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
