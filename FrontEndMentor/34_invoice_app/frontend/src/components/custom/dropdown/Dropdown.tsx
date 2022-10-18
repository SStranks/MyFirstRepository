import ArrowDown from '../../../assets/svg/icon-arrow-down.svg';
import styles from './Dropdown.module.scss';

function Dropdown(): JSX.Element {
  return (
    <div className={styles.container}>
      <h3>Filter by status</h3>
      <img src={ArrowDown} alt="" />
    </div>
  );
}

export default Dropdown;
