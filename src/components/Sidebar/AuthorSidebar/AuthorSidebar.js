// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './AuthorSidebar.module.scss';
import Author from './Author';
import Contacts from './Contacts';

type Props = {
  authors: {
    name: string,
    bio: string,
    photo: string
  }[],
  isIndex: ?boolean
};

const AuthorSidebar = ({ authors, isIndex }: Props) => (
  <div className={styles['authorsidebar']}>
    <h3>Authors</h3>
    <ul className={styles['authorsidebar__list']}>
      {authors.map((author) => (
        <li className={styles['authorsidebar__list-item']} key={author.name}>
          <Author author={author} isIndex={isIndex} />
        </li>
      ))}
    </ul>
  </div>
);

export default AuthorSidebar;
