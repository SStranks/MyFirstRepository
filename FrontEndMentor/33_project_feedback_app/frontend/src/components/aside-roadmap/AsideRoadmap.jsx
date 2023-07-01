/* eslint-disable unicorn/no-array-for-each */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import styles from './_AsideRoadmap.module.scss';

function AsideRoadmap(props) {
  const { invoices } = props;
  let plannedNum = 0;
  let inProgressNum = 0;
  let liveNum = 0;

  invoices?.forEach((invoice) => {
    const { status } = invoice;
    if (status === 'planned') plannedNum += 1;
    if (status === 'in-progress') inProgressNum += 1;
    if (status === 'live') liveNum += 1;
  });

  return (
    <div className={styles.roadmap}>
      <div className={styles.roadmap__header}>
        <h3>Roadmap</h3>
        <Link to="/roadmap">View</Link>
      </div>
      <div className={styles.roadmap__item}>
        <div className={`${styles.bullet} ${styles['bullet--orange']}`} />
        <p>Planned</p>
        <span>{plannedNum}</span>
      </div>
      <div className={styles.roadmap__item}>
        <div className={`${styles.bullet} ${styles['bullet--magenta']} `} />
        <p>In-Progress</p>
        <span>{inProgressNum}</span>
      </div>
      <div className={styles.roadmap__item}>
        <div className={`${styles.bullet} ${styles['bullet--blue']} `} />
        <p>Live</p>
        <span>{liveNum}</span>
      </div>
    </div>
  );
}

export default AsideRoadmap;
