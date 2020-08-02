// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  }
};

const Author = ({ author }: Props) => (
  <ul className={styles['author']}>
    <li>
      <div className={styles['author__headshot']}>
        <img
          src={withPrefix(author.photo)}
          className={styles['author__headshot_photo']}
          width="75"
          height="75"
          alt={author.name}
        />
      </div>
    </li>
    <li>
      <div className={styles['author__name']} height="75">
        <Link to={`/pages/${kebabCase(author.bio)}/`}
          className={styles['author__name-link']}
          activeClassName={styles['author__name-link--active']}
        >
          {author.name}
        </Link>
      </div>
    </li>
  </ul>
);

export default Author;
