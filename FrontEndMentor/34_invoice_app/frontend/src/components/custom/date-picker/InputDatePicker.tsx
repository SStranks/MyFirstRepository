import { useEffect, useRef, useState } from 'react';
import styles from './InputDatePicker.module.scss';
import InputDatePickerDay from './InputDatePickerDay';
import InputDatePickerMonth from './InputDatePickerMonth';
import InputDatePickerYear from './InputDatePickerYear';
import { formatDate, getNumberOfDaysInMonth } from './dateUtil';

interface IProps {
  currentDate?: Date;
  setCurrentDate?: React.Dispatch<React.SetStateAction<Date>>;
  min?: Date;
  max?: Date;
  delimiter: '/' | ' ';
  labelId?: string;
}

function InputDatePicker(props: IProps): JSX.Element {
  const {
    currentDate: currentDateProp,
    setCurrentDate: setCurrentDateProp,
    min,
    max,
    delimiter,
    labelId,
  } = props;
  const [currentDateInternal, setCurrentDateInternal] = useState<Date>(() => {
    return currentDateProp === undefined ? new Date() : currentDateProp;
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const inputDayRef = useRef<HTMLInputElement>(null);
  const inputMonthRef = useRef<HTMLInputElement>(null);
  const inputYearRef = useRef<HTMLInputElement>(null);

  // If Date is managed by parent component, use that components state setter function.
  const setCurrentDate = (date: Date) => {
    let constrainDate = date;
    if (min && date < min) constrainDate = min;
    if (max && date > max) constrainDate = max;
    if (setCurrentDateProp === undefined)
      return setCurrentDateInternal(constrainDate);
    return setCurrentDateProp(constrainDate);
  };

  // If Date is managed by parent component, use that components state value.
  const currentDate =
    currentDateProp === undefined ? currentDateInternal : currentDateProp;

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = getNumberOfDaysInMonth(currentYear, currentMonth);
  const formattedDate = formatDate(currentDate).split('/');
  const formattedDay = formattedDate[0];
  const formattedMonth = formattedDate[1];
  const formattedYear = formattedDate[2];

  // Get next input node focus; rotation amount (+/-)
  const rotateFocus = () => {
    const { activeElement } = document;
    if (activeElement === inputDayRef.current) inputMonthRef.current?.focus();
    if (activeElement === inputMonthRef.current) inputYearRef.current?.focus();
  };

  // Handle arrow key navigation between date fields
  useEffect(() => {
    const { current } = containerRef;
    const keydownHandler = (e: KeyboardEvent) => {
      const { activeElement } = document;
      if (current?.contains(activeElement)) {
        if (e.key === 'ArrowRight') {
          e.stopPropagation();
          if (activeElement === inputDayRef.current) {
            inputDayRef.current?.blur();
            inputMonthRef.current?.focus();
          }
          if (activeElement === inputMonthRef.current) {
            inputMonthRef.current?.blur();
            inputYearRef.current?.focus();
          }
        }
        if (e.key === 'ArrowLeft') {
          e.stopPropagation();
          if (activeElement === inputYearRef.current) {
            inputYearRef.current?.blur();
            inputMonthRef.current?.focus();
          }
          if (activeElement === inputMonthRef.current) {
            inputMonthRef.current?.blur();
            inputDayRef.current?.focus();
          }
        }
      }
    };
    current?.addEventListener('keydown', keydownHandler);
    return () => current?.removeEventListener('keydown', keydownHandler);
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <InputDatePickerDay
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        displayValue={formattedDay}
        currentDay={currentDay}
        daysInMonth={daysInMonth}
        inputRef={inputDayRef}
        rotateFocus={rotateFocus}
        labelId={labelId}
      />
      <p className={styles.inputDelimiter}>{delimiter}</p>
      <InputDatePickerMonth
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        displayValue={formattedMonth}
        currentMonth={currentMonth}
        inputRef={inputMonthRef}
        rotateFocus={rotateFocus}
        disabled={
          min !== undefined &&
          max !== undefined &&
          min?.getFullYear() === max?.getFullYear() &&
          min?.getMonth() === max?.getMonth()
        }
      />
      <p
        className={`${styles.inputDelimiter} ${
          min?.getFullYear() === max?.getFullYear() &&
          min?.getMonth() === max?.getMonth()
            ? styles['inputDelimiter--inactive']
            : ''
        }`}>
        {delimiter}
      </p>
      <InputDatePickerYear
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        displayValue={formattedYear}
        currentYear={currentYear}
        inputRef={inputYearRef}
        disabled={
          min !== undefined &&
          max !== undefined &&
          min?.getFullYear() === max?.getFullYear()
        }
      />
    </div>
  );
}

export default InputDatePicker;
