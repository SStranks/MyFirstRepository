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
        <p>Planned</p>
        <p>2</p>
      </div>
      <div className={styles.roadmap__item}>
        <p>In-Progress</p>
        <p>3</p>
      </div>
      <div className={styles.roadmap__item}>
        <p>Live</p>
        <p>1</p>
      </div>
    </div>
  );
}

export default AsideRoadmap;
