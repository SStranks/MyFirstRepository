import { useState } from 'react';
import Roadmap from '../roadmap/Roadmap';
import styles from './_RoadmapList.module.scss';

// Development Data
import JSONData from '../../data/data.json';

function RoadmapList() {
  const [mobileFilter, setmobileFilter] = useState({
    planned: true,
    'in-progress': false,
    live: false,
  });

  const radioInputHandler = (e) => {
    setmobileFilter({
      planned: false,
      'in-progress': false,
      live: false,
      [e.target.value]: true,
    });
  };

  // Temprary Dev
  const num1 = 2;
  const num2 = 3;
  const num3 = 1;
  const numPlanned = 2;
  const numProgress = 3;
  const numLive = 1;

  const roadmapItems = JSONData.productRequests
    .filter((item) => ['planned', 'in-progress', 'live'].includes(item.status))
    .map((item, i) => (
      <Roadmap
        // eslint-disable-next-line react/no-array-index-key
        key={i}
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
        <div>
          <input
            className={styles['grid__mobile-nav__radio']}
            type="radio"
            name="mobile-filter"
            value="planned"
            id="planned"
            onChange={radioInputHandler}
            defaultChecked
          />
          <label
            className={styles['grid__mobile-nav__label']}
            htmlFor="planned">
            Planned ({num1})
          </label>
        </div>
        <div>
          <input
            className={styles['grid__mobile-nav__radio']}
            type="radio"
            name="mobile-filter"
            value="in-progress"
            id="in-progress"
            onChange={radioInputHandler}
          />
          <label
            className={styles['grid__mobile-nav__label']}
            htmlFor="in-progress">
            In-Progress ({num2})
          </label>
        </div>
        <div>
          <input
            className={styles['grid__mobile-nav__radio']}
            type="radio"
            name="mobile-filter"
            id="live"
            value="live"
            onChange={radioInputHandler}
          />
          <label className={styles['grid__mobile-nav__label']} htmlFor="live">
            Live ({num3})
          </label>
        </div>
        <div
          className={`${styles['grid__mobile-nav__activebar']} ${
            mobileFilter.planned
              ? styles.col1
              : mobileFilter['in-progress']
              ? styles.col2
              : styles.col3
          }`}
        />
      </form>
      <div className={styles['grid__mobile-nav__title']}>
        {mobileFilter.planned && (
          <>
            <h3>{`Planned (${numPlanned})`}</h3>
            <p>Ideas prioritized for research</p>
          </>
        )}
        {mobileFilter['in-progress'] && (
          <>
            <h3>{`In-Progress (${numProgress})`}</h3>
            <p>Currently being developed</p>
          </>
        )}
        {mobileFilter.live && (
          <>
            <h3>{`Live (${numLive})`}</h3>
            <p>Released features</p>
          </>
        )}
      </div>
      <div className={styles.grid__title}>
        <h3>{`Planned (${numPlanned})`}</h3>
        <p>Ideas prioritized for research</p>
      </div>
      <div className={styles.grid__title}>
        <h3>{`In-Progress (${numProgress})`}</h3>
        <p>Currently being developed</p>
      </div>
      <div className={styles.grid__title}>
        <h3>{`Live (${numLive})`}</h3>
        <p>Released features</p>
      </div>
      <div className={styles.grid__subgrid}>{roadmapItems}</div>
    </div>
  );
}

export default RoadmapList;
