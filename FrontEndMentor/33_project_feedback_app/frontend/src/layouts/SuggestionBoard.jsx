/* eslint-disable react/prop-types */
import { useEffect, useReducer, useState } from 'react';
import {
  AsideRoadmap,
  AsideTags,
  Header,
  SuggestionsList,
  UtilityBarSuggestions,
} from '../components';

import styles from './_SuggestionBoard.module.scss';

const CATEGORYFILTER = {
  'tag-all': 'all',
  'tag-UI': 'ui',
  'tag-UX': 'ux',
  'tag-enhancement': 'enhancement',
  'tag-bug': 'bug',
  'tag-feature': 'feature',
};

const ACTIONS = {
  MOSTUPVOTES: 'Most Upvotes',
  LEASTUPVOTES: 'Least Upvotes',
  MOSTCOMMENTS: 'Most Comments',
  LEASTCOMMENTS: 'Least Comments',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MOSTUPVOTES:
      return [...state].sort((a, b) => {
        if (a.upvotes < b.upvotes) return 1;
        if (a.upvotes > b.upvotes) return -1;
        return 0;
      });
    case ACTIONS.LEASTUPVOTES:
      return [...state].sort((a, b) => {
        if (a.upvotes > b.upvotes) return 1;
        if (a.upvotes < b.upvotes) return -1;
        return 0;
      });
    case ACTIONS.MOSTCOMMENTS:
      return [...state].sort((a, b) => {
        if (a.totalComments < b.totalComments) return 1;
        if (a.totalComments > b.totalComments) return -1;
        return 0;
      });
    case ACTIONS.LEASTCOMMENTS:
      return [...state].sort((a, b) => {
        if (a.totalComments > b.totalComments) return 1;
        if (a.totalComments < b.totalComments) return -1;
        return 0;
      });
    case ACTIONS.REPLACESTATE:
      return action.payload;
    default:
      return state;
  }
}

function SuggestionBoard(props) {
  const { requests, isLoading } = props;
  const [state, dispatch] = useReducer(reducer);
  const [categoryFilter, setCategoryFilter] = useState('tag-all');

  useEffect(() => {
    dispatch({ type: ACTIONS.REPLACESTATE, payload: requests });
    if (requests !== undefined) dispatch({ type: ACTIONS.MOSTUPVOTES });
  }, [requests]);

  const filterRequestsByCategoryTag = state?.filter((el) => {
    if (categoryFilter === 'tag-all') return true;
    return el.category === CATEGORYFILTER[categoryFilter];
  });

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles['grid__sub-grid-1']}>
          <header>
            <Header requests={requests} setCategoryFilter={setCategoryFilter} />
          </header>
          <aside className={styles.grid__aside}>
            <AsideTags setCategoryFilter={setCategoryFilter} />
          </aside>
          <aside className={styles.grid__aside}>
            <AsideRoadmap requests={requests} />
          </aside>
        </div>
        <div className={styles['grid__sub-grid-2']}>
          <main>
            <UtilityBarSuggestions requests={requests} dispatch={dispatch} />
            <SuggestionsList
              requests={filterRequestsByCategoryTag}
              isLoading={isLoading}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default SuggestionBoard;
