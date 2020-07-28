// @flow strict
import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';
import type { Categories } from '../../../../types';
import styles from './FeedCategories.module.scss';

type Props = {
  categories: Categories
};

const FeedCategories = ({ categories }: Props) => (
  <div className={styles['feedcategories']}>
    <h3>Categories</h3>
    <ul className={styles['feedcategories__list']}>
      {categories.map((category) => (
        <li className={styles['feedcategories__list-item']} key={category.fieldValue}>
          <Link to={`/tag/${kebabCase(category.fieldValue)}/`}
            className={styles['feedcategories__list-item-link']}
            activeClassName={styles['feedcategories__list-item-link--active']}
          >
            {category.fieldValue} ({category.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FeedCategories;
