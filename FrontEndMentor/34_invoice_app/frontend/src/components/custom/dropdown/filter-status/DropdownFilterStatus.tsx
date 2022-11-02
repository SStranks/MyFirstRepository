import ArrowDown from '#Svg/icon-arrow-down.svg';
import styles from './DropdownFilterStatus.module.scss';

function Dropdown(): JSX.Element {
  return (
    <div className={styles.container}>
      <h3>
        Filter <span>by status</span>
      </h3>
      <img src={ArrowDown} alt="" />
    </div>
  );
}

export default Dropdown;
