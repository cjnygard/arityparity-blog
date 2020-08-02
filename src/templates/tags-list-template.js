// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const TagsListTemplate = () => {
  const {
    title,
    subtitle,
    categories,
    tags
  } = useSiteMetadata();

  return (
    <Layout title={`Tags - ${title}`} description={subtitle}>
      <Sidebar isIndex={false} categories={categories} tags={tags} />
      <Page title="Tags">
        <ul>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default TagsListTemplate;
