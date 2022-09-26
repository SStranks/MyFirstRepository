import styles from './_AsideTags.module.scss';

function AsideTags() {
  return (
    <div className={styles.categories}>
      <div className={styles.categories__btn}>All</div>
      <div className={styles.categories__btn}>UI</div>
      <div className={styles.categories__btn}>UX</div>
      <div className={styles.categories__btn}>Enhancement</div>
      <div className={styles.categories__btn}>Bug</div>
      <div className={styles.categories__btn}>Feature</div>
    </div>
  );
}

export default AsideTags;
