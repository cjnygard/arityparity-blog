// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import Post from './Post';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../../types';

describe('Post', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  const props = {
    post: {
      id: 'test-123',
      html: '<p>test</p>',
      fields: {
        slug: '/test',
        categorySlug: '/test-category',
        tagSlugs: [
          '/test_0',
          '/test_1'
        ]
      },
      frontmatter: {
        date: '2016-09-01',
        tags: [
          'test_0',
          'test_1'
        ],
        title: 'test',
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
        }
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Post {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
