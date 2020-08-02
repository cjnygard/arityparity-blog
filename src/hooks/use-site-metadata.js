// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site, categories, tags } = useStaticQuery(
    graphql`
      query SiteMetaData {
        categories: allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
        tags: allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
        site: site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                linkedin
                github
                twitter
                telegram
                instagram
                email
                rss
                vkontakte
                line
                gitlab
                weibo
                codepen
                youtube
                soundcloud
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `
  );

  return {
    ...site.siteMetadata,
    tags: [...tags.group],
    categories: [...categories.group]
  };
};

export default useSiteMetadata;
