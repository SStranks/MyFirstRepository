import Tag from '../custom/tag/Tag';
import styles from './_AsideTags.module.scss';

function AsideTags() {
  return (
    <div className={styles.categories}>
      <Tag title="All" active />
      <Tag title="UI" active={false} />
      <Tag title="UX" active={false} />
      <Tag title="Enhancement" active={false} />
      <Tag title="Bug" active={false} />
      <Tag title="Feature" active={false} />
    </div>
  );
}

export default AsideTags;
