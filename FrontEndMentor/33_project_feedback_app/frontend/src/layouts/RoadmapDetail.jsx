import { RoadmapList, UtilityBarRoadmap } from '../components';
import styles from './_RoadmapDetail.module.scss';

function RoadmapDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <nav>
          <UtilityBarRoadmap />
        </nav>
        <main>
          <RoadmapList />
        </main>
      </div>
    </div>
  );
}

export default RoadmapDetail;
