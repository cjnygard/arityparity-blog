// @flow strict
import React from 'react';
import AuthorSidebar from './AuthorSidebar';
import FeedCategories from './FeedCategories';
import FeedTags from './FeedTags';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata, useCategoriesList, useTagsList } from '../../hooks';

type Props = {
  isIndex?: boolean
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();
  const categories = useCategoriesList();
  const tags = useTagsList();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <h1 className={styles['sidebar__title']}>Arity Parity</h1>
        <Menu menu={menu} />
        <FeedCategories categories={categories} />
        <FeedTags tags={tags} />
        <AuthorSidebar authors={author} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
