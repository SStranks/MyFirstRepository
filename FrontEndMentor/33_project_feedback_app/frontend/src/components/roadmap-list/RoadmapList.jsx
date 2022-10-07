import { useRef, useState } from 'react';
import Roadmap from '../roadmap/Roadmap';
import styles from './_RoadmapList.module.scss';

// Development Data
import JSONData from '../../data/data.json';

function RoadmapList() {
  const [btnMobileFilter, setBtnMobileFilter] = useState({
    planned: true,
    'in-progress': false,
    live: false,
  });

  const btnMobileFilterClickHandler = (e) => {
    setBtnMobileFilter({
      planned: false,
      'in-progress': false,
      live: false,
      [e.target.value]: true,
    });
    // const btnActive = document.body.querySelector(
    //   `button[name = "${e.target.value}"]`
    // );
    // btnActive.classList.add(styles.active);
    // console.log(btnActive);
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
      <div className={styles['grid__mobile-nav']}>
        <button
          className={styles['grid__mobile-nav__btn1']}
          type="button"
          onClick={btnMobileFilterClickHandler}
          value="planned"
          name="planned">
          Planned ({num1})
        </button>
        <button
          className={styles['grid__mobile-nav__btn2']}
          type="button"
          onClick={btnMobileFilterClickHandler}
          value="in-progress"
          name="in-progress">
          In-Progress ({num2})
        </button>
        <button
          className={styles['grid__mobile-nav__btn3']}
          type="button"
          onClick={btnMobileFilterClickHandler}
          value="live"
          name="live">
          Live ({num3})
        </button>
        <div
          className={`${styles['grid__mobile-nav__activebar']} ${
            btnMobileFilter.planned
              ? styles.col1
              : btnMobileFilter['in-progress']
              ? styles.col2
              : styles.col3
          }`}
        />
      </div>
      <div className={styles['grid__mobile-nav__title']}>
        <h3>{`Planned (${numPlanned})`}</h3>
        <p>Ideas prioritized for research</p>
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
