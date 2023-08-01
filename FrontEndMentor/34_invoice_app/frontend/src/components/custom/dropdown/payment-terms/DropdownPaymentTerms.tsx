import IconArrow from '#Svg/icon-arrow-down.svg';
import { useRef, useState } from 'react';
import styles from './DropdownPaymentTerms.module.scss';

interface IProps {
  value: number | undefined;
  appendClass?: string;
}

function DropdownPaymentTerms(props: IProps): JSX.Element {
  const { value, appendClass } = props;
  const [currentValue, setCurrentValue] = useState<number>(
    value !== undefined ? value : 30
  );
  const [listOpen, setListOpen] = useState<boolean>(false);
  const dropdownBtnRef = useRef<HTMLButtonElement>(null);

  const dropdownBtnClickHandler = () => {
    setListOpen((prev) => !prev);
    dropdownBtnRef.current?.classList.toggle(styles['dropdownBtn--active']);
  };

  const listItemClicHandler = (val: number) => {
    setCurrentValue(val);
    dropdownBtnClickHandler();
  };

  return (
    <div className={`${styles.container} ${appendClass}`}>
      <label htmlFor="dropdownBtn">
        <button
          type="button"
          className={styles.dropdownBtn}
          onClick={dropdownBtnClickHandler}
          ref={dropdownBtnRef}>
          <p>{`Net ${currentValue} Day${currentValue > 1 ? 's' : ''}`}</p>
          <img src={IconArrow} alt="" />
        </button>
      </label>
      {listOpen && (
        <div className={styles.dropdownList}>
          <ul>
            <li>
              <button type="button" onClick={() => listItemClicHandler(1)}>
                Net 1 Day
              </button>
            </li>
            <li>
              <button type="button" onClick={() => listItemClicHandler(7)}>
                Net 7 Days
              </button>
            </li>
            <li>
              <button type="button" onClick={() => listItemClicHandler(14)}>
                Net 14 Days
              </button>
            </li>
            <li>
              <button type="button" onClick={() => listItemClicHandler(30)}>
                Net 30 Days
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownPaymentTerms;
