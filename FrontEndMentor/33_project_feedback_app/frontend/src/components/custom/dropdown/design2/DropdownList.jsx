/* eslint-disable react/prop-types */
import IconCheck from '../../../../assets/svg/shared/icon-check.svg';
import styles from './_DropdownList.module.scss';

function DropdownList(props) {
  const { listItems, setCurrentSort, active, name } = props;

  const onRadioCheck = (e) => {
    setCurrentSort(e.target.id);
  };

  const renderListItems = listItems.map((item, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <li className={styles.list__li} key={i} onChange={onRadioCheck}>
      <input
        type="radio"
        className={styles.list__radio}
        id={item}
        name={name}
        value={item}
        defaultChecked={!i}
      />
      <label className={styles.list__label} htmlFor={item}>
        {item}
        <img className={styles.list__img} src={IconCheck} alt="" />
      </label>
    </li>
  ));

  return (
    <ul className={`${styles.list} ${active ? '' : styles.hidden}`}>
      {renderListItems}
    </ul>
  );
}

export default DropdownList;
