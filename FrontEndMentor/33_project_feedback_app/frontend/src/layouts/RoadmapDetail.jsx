/* eslint-disable react/prop-types */
import { RoadmapList, UtilityBarRoadmap } from '../components';
import styles from './_RoadmapDetail.module.scss';

function RoadmapDetail(props) {
  const { requests } = props;
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <nav>
          <UtilityBarRoadmap />
        </nav>
        <main>
          <RoadmapList requests={requests} />
        </main>
      </div>
    </div>
  );
}

export default RoadmapDetail;
