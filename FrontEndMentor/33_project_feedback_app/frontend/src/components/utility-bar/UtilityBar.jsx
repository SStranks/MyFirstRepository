import styles from './_UtilityBar.module.scss';

function UtilityBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__suggestions}>
        <img src="" alt="" />
        <h3>6 Suggestions</h3>
        <p>Sort by : Most Upvotes</p>
      </div>
      <div className={styles.btnPlaceholder}>Add Feedback</div>
    </div>
  );
}

export default UtilityBar;
