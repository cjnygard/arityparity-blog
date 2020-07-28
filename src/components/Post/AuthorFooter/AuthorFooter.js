// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './AuthorFooter.module.scss';
import { useSiteMetadata } from '../../../hooks';
import Author from './Author';
import Contacts from './Contacts';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  }
};


const AuthorFooter = ({ author }: Props) => {

  return (
    <div className={styles['authorfooter']}>
      <div className={styles['authorfooter__author']}>
        <Author author={author} isIndex={false} />
      </div>
      <div className={styles['authorfooter__contact']}>
        <Contacts contacts={author.contacts} />
      </div>
    </div>
  );
};

export default AuthorFooter;
