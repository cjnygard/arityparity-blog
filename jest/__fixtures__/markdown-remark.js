'use strict';

module.exports = {
  markdownRemark: {
    id: 'test-123',
    html: '<p>test</p>',
    fields: {
      tagSlugs: [
        '/test_0',
        '/test_1'
      ]
    },
    frontmatter: {
      date: '2016-09-01',
      description: 'test',
      title: 'test',
      tags: [
        'test_0',
        'test_1'
      ],
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
