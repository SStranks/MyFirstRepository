import IconArrowLeft from '#Svg/icon-arrow-left.svg';
import IconArrowRight from '#Svg/icon-arrow-right.svg';
import { useEffect, useRef, useState } from 'react';
import styles from './InputDateCalendar.module.scss';
import { formatDate, getNumberOfDaysInMonth } from './dateUtil';

interface IProps {
  currentDate?: Date;
  setCurrentDate?: React.Dispatch<React.SetStateAction<Date>>;
  setDropdownOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  min?: Date;
  max?: Date;
}

function InputDateCalendar(props: IProps): JSX.Element {
  const {
    currentDate: currentDateProp,
    setCurrentDate: setCurrentDateProp,
    setDropdownOpen,
    min,
    max,
  } = props;
  const [currentDateInternal, setCurrentDateInternal] = useState<Date>(() => {
    return currentDateProp === undefined ? new Date() : currentDateProp;
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const focusableElements = containerRef.current?.querySelectorAll(
    'button:not([tabindex="-1"])'
  );

  console.log('FOCUSABLE ELEMENTS', focusableElements);

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      const { activeElement } = document;
      if (focusableElements && activeElement) {
        console.log('ACIVE ELEMENT', activeElement);
        // eslint-disable-next-line unicorn/prefer-spread
        const curElementIndex = Array.from(focusableElements).findIndex(
          (node: Node) => node.isEqualNode(activeElement)
        );

        if (e.key === 'Tab') {
          if (e.shiftKey) {
            (
              focusableElements[
                (curElementIndex - 1 + focusableElements.length) %
                  focusableElements.length
              ] as HTMLInputElement
            ).focus();
            return e.preventDefault();
          }
          (
            focusableElements[
              (curElementIndex + 1) % focusableElements.length
            ] as HTMLInputElement
          ).focus();
          return e.preventDefault();
        }
        return null;
      }
      return null;
    };

    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [focusableElements]);

  // If Date is managed by parent component, use that components state setter function.
  const setCurrentDate = (date: Date) => {
    let constrainDate;
    if (min) {
      constrainDate = date < min ? min : date;
    }
    if (max) {
      constrainDate = date > max ? max : date;
    }
    if (setCurrentDateProp === undefined)
      return setCurrentDateInternal(constrainDate || date);
    return setCurrentDateProp(constrainDate || date);
  };

  // If Date is managed by parent component, use that components state value.
  const currentDate =
    currentDateProp === undefined ? currentDateInternal : currentDateProp;

  const currentDateDay = currentDate.getDate();
  const currentDateMonth = currentDate.getMonth();
  const currentDateYear = currentDate.getFullYear();
  const currentDateDaysInMonth = getNumberOfDaysInMonth(
    currentDateYear,
    currentDateMonth
  );

  const dateOnClick = (date: Date) => {
    if (setDropdownOpen) setDropdownOpen(false);
    setCurrentDate(date);
  };

  const currentMonthTable = [...Array.from({ length: 35 })].map((_, i) => {
    const dateValue =
      i + 1 > currentDateDaysInMonth ? i - currentDateDaysInMonth + 1 : i + 1;
    const dateMonth =
      dateValue !== i + 1 ? currentDateMonth + 1 : currentDateMonth;
    const newDate = new Date(
      new Date(currentDate).setMonth(dateMonth, dateValue)
    );

    return (
      <button
        type="button"
        className={`${styles.calendar__date} ${
          i + 1 === currentDateDay ? styles['calendar__date--active'] : ''
        } ${dateValue !== i + 1 ? styles['calendar__date--outOfBounds'] : ''}`}
        onClick={() => dateOnClick(newDate)}
        /*  eslint-disable-next-line react/no-array-index-key */
        key={i}
        tabIndex={i + 1 !== currentDateDay ? -1 : 0}>
        <p>{dateValue}</p>
      </button>
    );
  });

  const prevMonthBtn = () => {
    const curMonth = currentDate.getMonth();
    setCurrentDate(new Date(new Date(currentDate.setMonth(curMonth - 1))));
    console.log('PREVMONTH BTN');
  };

  const nextMonthBtn = () => {
    const curMonth = currentDate.getMonth();
    // NOTE:  Need to set minimum; next month may have less days than current, therefore Date will flip over another month (wrong)
    setCurrentDate(new Date(new Date(currentDate.setMonth(curMonth + 1))));
    console.log('NEXTMONTH BTN');
  };

  const clearBtn = () => {
    if (setDropdownOpen) setDropdownOpen(false);
    // TODO:  Need to set date to default string - might need to change input to three inputs with placeholder texts?
    // setCurrentDate(new Date('dd/mm/yyyy'));
    console.log('CLEAR BTN');
  };

  const todayBtn = () => {
    if (setDropdownOpen) setDropdownOpen(false);
    setCurrentDate(new Date());
    console.log('TODAY BTN');
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.dataBar}>
        <button type="button" onClick={prevMonthBtn}>
          <img src={IconArrowLeft} alt="" />
        </button>
        <p>{formatDate(currentDate)}</p>
        <button type="button" onClick={nextMonthBtn}>
          <img src={IconArrowRight} alt="" />
        </button>
      </div>
      <div className={styles.calendar}>{currentMonthTable}</div>
      <div className={styles.buttonsBar}>
        <button type="button" onClick={clearBtn}>
          Clear
        </button>
        <button type="button" onClick={todayBtn}>
          Today
        </button>
      </div>
    </div>
  );
}

export default InputDateCalendar;
