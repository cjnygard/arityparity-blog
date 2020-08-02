// @flow strict
import React from 'react';
import styles from './AuthorFooter.module.scss';
import Author from './Author';
import Contacts from './Contacts';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string,
    contacts: {
      [string]: string,
    },
  }
};

const AuthorFooter = ({ author }: Props) => (
  <div className={styles['authorfooter']}>
    <div className={styles['authorfooter__author']}>
      <Author author={author} isIndex={false} />
    </div>
    <div className={styles['authorfooter__contact']}>
      <Contacts contacts={author.contacts} />
    </div>
  </div>
);

export default AuthorFooter;
