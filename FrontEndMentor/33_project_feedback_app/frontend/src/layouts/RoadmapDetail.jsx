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
    <>
      <nav>
        <UtilityBarRoadmap />
      </nav>
      <main>
        <RoadmapList />
      </main>
      {/* aside - top navigation */}
      {/* main: grid: roadmap suggestion components */}
    </>
  );
}

export default RoadmapDetail;
