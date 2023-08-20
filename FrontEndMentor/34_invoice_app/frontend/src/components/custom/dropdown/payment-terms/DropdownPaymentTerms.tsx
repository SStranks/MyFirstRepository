import IconArrow from '#Svg/icon-arrow-down.svg';
import { useEffect, useRef, useState } from 'react';
import styles from './DropdownPaymentTerms.module.scss';

interface IProps {
  value: number | undefined;
  labelId?: string;
  appendClass?: string;
}

// TODO:  Dropdown keydown/up navigate options in list
function DropdownPaymentTerms(props: IProps): JSX.Element {
  const { value, labelId, appendClass } = props;
  const [currentValue, setCurrentValue] = useState<number | undefined>(value);
  const [listOpen, setListOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownBtnRef = useRef<HTMLButtonElement>(null);

  // Handle clicks outside of component; close dropdown
  useEffect(() => {
    const { current } = containerRef;
    const clickHandler = (e: MouseEvent) => {
      if (
        current &&
        listOpen &&
        e.target !== current &&
        !current.contains(e.target as HTMLElement)
      ) {
        setListOpen(false);
      }
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [listOpen]);

  const dropdownBtnClickHandler = () => {
    setListOpen((prev) => !prev);
    dropdownBtnRef.current?.classList.toggle(styles['dropdownBtn--active']);
  };

  const listItemClickHandler = (e: React.MouseEvent, val: number) => {
    e.preventDefault();
    dropdownBtnClickHandler();
    setCurrentValue(val);
    dropdownBtnRef.current?.focus();
  };

  const displayValue = currentValue
    ? `Net ${currentValue} Day${currentValue > 1 ? 's' : ''}`
    : '';

  return (
    <div
      id="dropdownPaymentTerms"
      className={`${styles.container} ${appendClass}`}
      ref={containerRef}>
      <label htmlFor={labelId}>
        <button
          type="button"
          className={styles.dropdownBtn}
          onClick={dropdownBtnClickHandler}
          ref={dropdownBtnRef}>
          <input
            type="text"
            className="hidden"
            name="paymentTerms"
            defaultValue={displayValue}
            required
          />
          <input
            type="text"
            id={labelId}
            className={styles.dropdownBtn__hiddenInput}
            name="paymentTerms"
            value={displayValue}
            readOnly
          />
          <img src={IconArrow} alt="" />
        </button>
      </label>
      {listOpen && (
        <div className={styles.dropdownList}>
          <ul>
            <li>
              <button type="button" onClick={(e) => listItemClickHandler(e, 1)}>
                Net 1 Day
              </button>
            </li>
            <li>
              <button type="button" onClick={(e) => listItemClickHandler(e, 7)}>
                Net 7 Days
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e) => listItemClickHandler(e, 14)}>
                Net 14 Days
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e) => listItemClickHandler(e, 30)}>
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
