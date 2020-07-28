// @flow strict
import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';
import type { Tags } from '../../../../types';
import styles from './FeedTags.module.scss';

type Props = {
  tags: Tags
};

const FeedTags = ({ tags }: Props) => (
  <div className={styles['feedtags']}>
    <h3>Tags</h3>
    <ul className={styles['feedtags__list']}>
      {tags.map((tag) => (
        <li className={styles['feedtags__list-item']} key={tag.fieldValue}>
          <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}
            className={styles['feedtags__list-item-link']}
            activeClassName={styles['feedtags__list-item-link--active']}
          >
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FeedTags;
