import CheckBox from '#Components/custom/checkbox/CheckBox';
import ArrowDown from '#Svg/icon-arrow-down.svg';
import { useEffect, useRef, useState } from 'react';
import styles from './DropdownFilterStatus.module.scss';

function Dropdown(): JSX.Element {
  const [filterStatus, setFilterStatus] = useState({
    draft: false,
    pending: false,
    paid: false,
  });
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const iconArrowRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (
        e.target !== listRef.current &&
        !dropdownContainerRef.current?.contains(e.target as HTMLElement)
      ) {
        listRef.current?.classList.add('hidden');
      }
    };

    document?.addEventListener('click', clickHandler);
    return () => {
      document?.addEventListener('click', clickHandler);
    };
  }, []);

  const btnClickHandler = () => {
    if (listRef.current && iconArrowRef.current) {
      listRef.current.classList.toggle('hidden');
      iconArrowRef.current.classList.toggle(styles.iconArrow);
    }
  };

  return (
    <div className={styles.container} ref={dropdownContainerRef}>
      <button className={styles.btn} type="button" onClick={btnClickHandler}>
        <h3>
          Filter <span>by status</span>
        </h3>
        <img ref={iconArrowRef} src={ArrowDown} alt="" />
      </button>
      <div className={`${styles.list} hidden`} ref={listRef}>
        <CheckBox
          title="Draft"
          checked={filterStatus.draft}
          inputName="draft"
          onClick={setFilterStatus}
        />
        <CheckBox
          title="Pending"
          checked={filterStatus.pending}
          inputName="pending"
          onClick={setFilterStatus}
        />
        <CheckBox
          title="Paid"
          checked={filterStatus.paid}
          inputName="paid"
          onClick={setFilterStatus}
        />
      </div>
    </div>
  );
}

export default Dropdown;
