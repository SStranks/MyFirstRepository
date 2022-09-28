import Roadmap from '../roadmap/Roadmap';
import styles from './_RoadmapList.module.scss';

function RoadmapList() {
  // Temprary Dev
  const numPlanned = 2;
  const numProgress = 3;
  const numLive = 1;

  return (
    <div className={styles.grid}>
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
      <div className={styles.grid__subgrid}>
        {/* Temporary Dev */}
        <Roadmap />
        <Roadmap />
        <Roadmap />
        <Roadmap />
        <Roadmap />
        <Roadmap />
      </div>
    </div>
  );
}

export default RoadmapList;
