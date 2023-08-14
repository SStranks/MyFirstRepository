/* eslint-disable unicorn/consistent-function-scoping */
import IconArrowLeft from '#Svg/icon-arrow-left.svg';
import IconArrowRight from '#Svg/icon-arrow-right.svg';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './InputDateCalendar.module.scss';
// import InputDateCalendarPicker from './InputDateCalendarPicker';
import { formatDate, getNumberOfDaysInMonth } from './dateUtil';

const DAYS_LETTER_SUNDAY = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const DAYS_LETTER_MONDAY = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const tableHeaderSunday = DAYS_LETTER_SUNDAY.map((el, i) => {
  // eslint-disable-next-line react/no-array-index-key
  return <p key={i}>{el}</p>;
});
const tableHeaderMonday = DAYS_LETTER_MONDAY.map((el, i) => {
  // eslint-disable-next-line react/no-array-index-key
  return <p key={i}>{el}</p>;
});
const tableHeader = {
  Sunday: tableHeaderSunday,
  Monday: tableHeaderMonday,
};

interface IProps {
  currentDate?: Date;
  setCurrentDate?: React.Dispatch<React.SetStateAction<Date>>;
  setDropdownOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  min?: Date;
  max?: Date;
  dayHeaders?: 'Sunday' | 'Monday';
}

// TODO:  Set autofocus on current day when openning the calendar
// REFACTOR:  Change calendar to be conditionally rendered, not CSS display none.
function InputDateCalendar(props: IProps): JSX.Element {
  const {
    currentDate: currentDateProp,
    setCurrentDate: setCurrentDateProp,
    setDropdownOpen,
    min,
    max,
    dayHeaders = 'Sunday',
  } = props;
  const [currentDateInternal, setCurrentDateInternal] = useState<Date>(() => {
    return currentDateProp === undefined ? new Date() : currentDateProp;
  });
  const [calendarPickerOpen, setCalendarPickerOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const focusableElements = containerRef.current?.querySelectorAll(
    'button:not([tabindex="-1"])'
  );

  // Initialize tabbing - confines focus to within the calendar component.
  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      const { activeElement } = document;
      if (focusableElements && containerRef.current?.focus) {
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
  const setCurrentDate = useCallback(
    (date: Date) => {
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
    },
    [max, min, setCurrentDateProp]
  );

  // If Date is managed by parent component, use that components state value.
  const currentDate =
    currentDateProp === undefined ? currentDateInternal : currentDateProp;

  const currentMonthTable = useMemo(() => {
    let dayOffset = 0;
    const currentDateDay = currentDate.getDate();
    const currentDateMonth = currentDate.getMonth();
    const currentDateYear = currentDate.getFullYear();
    const currentDateDaysInMonth = getNumberOfDaysInMonth(
      currentDateYear,
      currentDateMonth
    );
    const currentDateFirstDay = new Date(
      currentDateYear,
      currentDateMonth,
      1
    ).getDay();

    const previousMonth = new Date(
      new Date(currentDate).setMonth(currentDateMonth - 1)
    );
    const previousMonthDaysInMonth = getNumberOfDaysInMonth(
      previousMonth.getFullYear(),
      previousMonth.getMonth()
    );

    if (dayHeaders) {
      if (dayHeaders === 'Sunday') dayOffset = currentDateFirstDay;
      if (dayHeaders === 'Monday') dayOffset = (currentDateFirstDay + 6) % 7;
    }

    const dateOnClick = (date: Date) => {
      if (setDropdownOpen) setDropdownOpen(false);
      setCurrentDate(date);
    };

    const arrayLength = dayOffset + currentDateDaysInMonth > 35 ? 42 : 35;
    const calendarTable = [...Array.from({ length: arrayLength })].map(
      (_, i) => {
        let dateValue;
        let dateMonth;
        if (i < dayOffset) {
          dateValue = previousMonthDaysInMonth - (dayOffset - (i + 1));
          dateMonth = currentDateMonth - 1;
        } else if (i >= currentDateDaysInMonth + dayOffset) {
          dateValue = i - currentDateDaysInMonth - dayOffset + 1;
          dateMonth = currentDateMonth + 1;
        } else {
          dateValue = i + 1 - dayOffset;
          dateMonth = currentDateMonth;
        }

        const newDate = new Date(
          new Date(currentDate).setMonth(dateMonth, dateValue)
        );

        return (
          <button
            type="button"
            className={`${styles.calendar__date} ${
              dateValue === currentDateDay
                ? styles['calendar__date--active']
                : ''
            } ${
              dateMonth !== currentDateMonth
                ? styles['calendar__date--outOfBounds']
                : ''
            } `}
            onClick={() => dateOnClick(newDate)}
            /*  eslint-disable-next-line react/no-array-index-key */
            key={i}
            tabIndex={i + 1 !== currentDateDay ? -1 : 0}>
            <p>{dateValue}</p>
          </button>
        );
      }
    );

    return calendarTable;
  }, [currentDate, setCurrentDate, setDropdownOpen, dayHeaders]);

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
    setCurrentDate(new Date('dd/mm/yyyy'));
    console.log('CLEAR BTN');
  };

  const todayBtn = () => {
    if (setDropdownOpen) setDropdownOpen(false);
    setCurrentDate(new Date());
    console.log('TODAY BTN');
  };

  const dateBtn = () => {
    setCalendarPickerOpen(true);
    console.log('DATE BTN', calendarPickerOpen);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      {/* // TODO:  Complete this component later - not required for this project */}
      {/* <InputDateCalendarPicker
        calendarPickerOpen={calendarPickerOpen}
        setCalendarPickerOpen={setCalendarPickerOpen}
      /> */}
      <div className={styles.dataBar}>
        <button type="button" onClick={prevMonthBtn}>
          <img src={IconArrowLeft} alt="" />
        </button>
        <button
          type="button"
          onClick={dateBtn}
          className={styles.dataBar__dateBtn}>
          {formatDate(currentDate)}
        </button>
        <button type="button" onClick={nextMonthBtn}>
          <img src={IconArrowRight} alt="" />
        </button>
      </div>
      <div className={styles.calendar}>
        {dayHeaders && tableHeader[dayHeaders]}
        {currentMonthTable}
      </div>
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
