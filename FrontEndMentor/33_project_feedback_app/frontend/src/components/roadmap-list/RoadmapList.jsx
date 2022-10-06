import Roadmap from '../roadmap/Roadmap';
import styles from './_RoadmapList.module.scss';

// Development Data
import JSONData from '../../data/data.json';

function RoadmapList() {
  // Temprary Dev
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
