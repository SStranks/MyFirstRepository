import { Link } from 'react-router-dom';

import styles from './_AsideRoadmap.module.scss';

function AsideRoadmap() {
  return (
    <div className={styles.roadmap}>
      <div className={styles.roadmap__header}>
        <h3>Roadmap</h3>
        <Link to="/roadmap">View</Link>
      </div>
      <div className={styles.roadmap__item}>
        <div className={`${styles.bullet} ${styles['bullet--orange']}`} />
        <p>Planned</p>
        <span>2</span>
      </div>
      <div className={styles.roadmap__item}>
        <div className={`${styles.bullet} ${styles['bullet--magenta']} `} />
        <p>In-Progress</p>
        <span>3</span>
      </div>
      <div className={styles.roadmap__item}>
        <div className={`${styles.bullet} ${styles['bullet--blue']} `} />
        <p>Live</p>
        <span>1</span>
      </div>
    </div>
  );
}

export default AsideRoadmap;
