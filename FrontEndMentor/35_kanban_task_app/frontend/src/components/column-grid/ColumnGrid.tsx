import Column from '#Components/column/Column';
import ColumnEmpty from '#Components/column/ColumnEmpty';
import styles from './_ColumnGrid.module.scss';

function ColumnGrid(): JSX.Element {
  return (
    <div className={styles['column-grid']}>
      <Column />
      <Column />
      <Column />
      <Column />
      <ColumnEmpty />
    </div>
  );
}

export default ColumnGrid;
