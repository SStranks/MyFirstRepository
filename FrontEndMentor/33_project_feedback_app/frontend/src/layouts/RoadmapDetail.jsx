import { RoadmapList, UtilityBarRoadmap } from '../components';

// temporary dev
import Modal from './Modal';

import styles from './_RoadmapDetail.module.scss';

function RoadmapDetail() {
  // temporary dev
  // return (
  //   <div className={styles.container}>
  //     <Modal />
  //   </div>
  // );

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <nav>
          <UtilityBarRoadmap />
        </nav>
        <main>
          <RoadmapList />
        </main>
        {/* aside - top navigation */}
        {/* main: grid: roadmap suggestion components */}
      </div>
    </div>
  );
}

export default RoadmapDetail;
