/* eslint-disable unicorn/no-array-for-each */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import Roadmap from '../roadmap/Roadmap';
import styles from './_RoadmapList.module.scss';

import styles2 from '../../assets/sass/_exports.module.scss';

console.log(styles2.test);

// Width at which mobile request.status filtering becomes actives
const mediaQuery = '(width < 700px)';

function RoadmapList(props) {
  const { requests } = props;
  const isMobileFilter = useMediaQuery(mediaQuery);
  const [requestStatusFilter, setRequestStatusFilter] = useState('planned');
  let plannedNum = 0;
  let inProgressNum = 0;
  let liveNum = 0;

  requests?.forEach((request) => {
    const { status } = request;
    if (status === 'planned') plannedNum += 1;
    if (status === 'in-progress') inProgressNum += 1;
    if (status === 'live') liveNum += 1;
  });

  const radioInputHandler = (e) => {
    setRequestStatusFilter(e.target.value);
  };

  const roadmapItems = requests
    ?.filter((item) => {
      if (item.status === 'suggestion') return false;
      if (isMobileFilter) {
        return item.status === requestStatusFilter;
      }
      return true;
    })
    .map((item) => (
      <Roadmap
        key={item.id}
        id={item.id}
        status={item.status}
        title={item.title}
        description={item.description}
        category={item.category}
        upvotes={item.upvotes}
        comments={item.comments?.length || 0}
      />
    ));

  return (
    <div className={styles.grid}>
      <form className={styles['grid__mobile-nav']}>
        <label className={styles['grid__mobile-nav__label']} htmlFor="planned">
          <input
            className={styles['grid__mobile-nav__radio']}
            type="radio"
            name="mobile-filter"
            value="planned"
            id="planned"
            onChange={radioInputHandler}
            defaultChecked
          />
          Planned <br className={styles['grid__mobile-nav__label__br']} />(
          {plannedNum})
        </label>
        <label
          className={styles['grid__mobile-nav__label']}
          htmlFor="in-progress">
          <input
            className={styles['grid__mobile-nav__radio']}
            type="radio"
            name="mobile-filter"
            value="in-progress"
            id="in-progress"
            onChange={radioInputHandler}
          />
          In-Progress <br className={styles['grid__mobile-nav__label__br']} />(
          {inProgressNum})
        </label>
        <label className={styles['grid__mobile-nav__label']} htmlFor="live">
          <input
            className={styles['grid__mobile-nav__radio']}
            type="radio"
            name="mobile-filter"
            id="live"
            value="live"
            onChange={radioInputHandler}
          />
          Live <br className={styles['grid__mobile-nav__label__br']} />(
          {liveNum})
        </label>
        <div
          className={`${styles['grid__mobile-nav__activebar']} ${
            requestStatusFilter === 'planned'
              ? styles.col1
              : requestStatusFilter === 'in-progress'
              ? styles.col2
              : styles.col3
          }`}
        />
      </form>
      <div className={styles['grid__mobile-nav__title']}>
        {requestStatusFilter === 'planned' && (
          <>
            <h3>{`Planned (${plannedNum})`}</h3>
            <p>Ideas prioritized for research</p>
          </>
        )}
        {requestStatusFilter === 'in-progress' && (
          <>
            <h3>{`In-Progress (${inProgressNum})`}</h3>
            <p>Currently being developed</p>
          </>
        )}
        {requestStatusFilter === 'live' && (
          <>
            <h3>{`Live (${liveNum})`}</h3>
            <p>Released features</p>
          </>
        )}
      </div>
      <div className={styles.grid__title}>
        <h3>{`Planned (${plannedNum})`}</h3>
        <p>Ideas prioritized for research</p>
      </div>
      <div className={styles.grid__title}>
        <h3>{`In-Progress (${inProgressNum})`}</h3>
        <p>Currently being developed</p>
      </div>
      <div className={styles.grid__title}>
        <h3>{`Live (${liveNum})`}</h3>
        <p>Released features</p>
      </div>
      <div className={styles.grid__subgrid}>
        <div className={styles.grid__subgrid2}>{roadmapItems}</div>
      </div>
      {/* <div className={styles.grid__subgrid}>{roadmapItems}</div> */}
    </div>
  );
}

export default RoadmapList;
