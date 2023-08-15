import { useEffect, useRef, useState } from 'react';
import styles from './InputDatePicker.module.scss';
import InputDatePicker2Day from './InputDatePicker2Day';
import InputDatePicker2Month from './InputDatePicker2Month';
import InputDatePicker2Year from './InputDatePicker2Year';
import { formatDate, getNumberOfDaysInMonth } from './dateUtil';

interface IProps {
  currentDate?: Date;
  setCurrentDate?: React.Dispatch<React.SetStateAction<Date>>;
  min?: Date;
  max?: Date;
  delimiter: '/' | ' ';
}

function InputDatePicker(props: IProps): JSX.Element {
  const {
    currentDate: currentDateProp,
    setCurrentDate: setCurrentDateProp,
    min,
    max,
    delimiter,
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

  // Handle arrow key navigation between date fields
  useEffect(() => {
    const { current } = containerRef;
    const keydownHandler = (e: KeyboardEvent) => {
      const { activeElement } = document;
      if (current?.contains(activeElement)) {
        if (e.key === 'ArrowRight') {
          if (activeElement === inputDayRef.current)
            inputMonthRef.current?.focus();
          if (activeElement === inputMonthRef.current)
            inputYearRef.current?.focus();
        }
        if (e.key === 'ArrowLeft') {
          if (activeElement === inputYearRef.current)
            inputMonthRef.current?.focus();
          if (activeElement === inputMonthRef.current)
            inputDayRef.current?.focus();
        }
      }
    };
    current?.addEventListener('keydown', keydownHandler);
    return () => current?.removeEventListener('keydown', keydownHandler);
  }, []);

  // eslint-disable-next-line unicorn/consistent-function-scoping
  // const inputOnKey = (e: React.KeyboardEvent) => {
  //   // e.preventDefault();
  //   // const input = e.target as HTMLInputElement;
  //   // const selectStart = input.selectionStart || 0;
  //   // let date = currentDate.getDate();
  //   // const month = currentDate.getMonth() + 1;
  //   // const year = currentDate.getFullYear();
  //   // const daysInMonth = getNumberOfDaysInMonth(year, month);
  //   // setLastKeyPress(e.key);
  //   console.log(e.key, e.target, document.activeElement);

  //   switch (e.key) {
  //     case 'Backspace':
  //       // TODO:  Set to 'DD' etc.
  //       return null;
  //     case 'ArrowLeft':
  //       return e.target.dispatchEvent(
  //         new KeyboardEvent('keydown', { key: 'Tab', bubbles: true })
  //       );

  //     case 'ArrowRight':
  //       return e.target.dispatchEvent(
  //         new KeyboardEvent('keydown', { key: 'Tab', bubbles: true })
  //       );
  //     // case 'ArrowUp':
  //     //   e.preventDefault();
  //     //   return setInputValueDay(9);
  //     // case 'ArrowUp':
  //     //   if (datePortion === 'DD') {
  //     //     return setCurrentDate(
  //     //       new Date(
  //     //         new Date(currentDate).setDate(
  //     //           date + 1 > daysInMonth ? 1 : date + 1
  //     //         )
  //     //       )
  //     //     );
  //     //   }
  //     //   if (datePortion === 'MM') {
  //     //     return setCurrentDate(
  //     //       new Date(new Date(currentDate).setMonth(month + 1 > 12 ? 0 : month))
  //     //     );
  //     //   }
  //     //   return setCurrentDate(
  //     //     new Date(
  //     //       new Date(currentDate).setFullYear(year + 1 > 9999 ? 9999 : year + 1)
  //     //     )
  //     //   );
  //     // case 'ArrowDown':
  //     //   if (datePortion === 'DD') {
  //     //     return setCurrentDate(
  //     //       new Date(
  //     //         new Date(currentDate).setDate(
  //     //           date - 1 < 1 ? daysInMonth : date - 1
  //     //         )
  //     //       )
  //     //     );
  //     //   }
  //     //   if (datePortion === 'MM') {
  //     //     return setCurrentDate(
  //     //       new Date(
  //     //         new Date(currentDate).setMonth(month - 1 < 1 ? 11 : month - 2)
  //     //       )
  //     //     );
  //     //   }
  //     //   return setCurrentDate(
  //     //     new Date(
  //     //       new Date(currentDate).setFullYear(year - 1 < 1 ? 1 : year - 1)
  //     //     )
  //     //   );
  //     // case '0':
  //     //   if (datePortion === 'DD') {
  //     //     if (lastKeyPress) {
  //     //       setInputSelectPosition(selectStart + 3);
  //     //       const newDate = date * 10;
  //     //       return setCurrentDate(
  //     //         new Date(
  //     //           new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
  //     //         )
  //     //       );
  //     //     }
  //     //     return setCurrentDate(new Date(new Date(currentDate).setDate(1)));
  //     //   }
  //     //   if (datePortion === 'MM') {
  //     //     if (lastKeyPress) {
  //     //       setInputSelectPosition(selectStart + 3);
  //     //       return setCurrentDate(
  //     //         new Date(
  //     //           new Date(currentDate).setMonth(lastKeyPress === '0' ? 0 : 9)
  //     //         )
  //     //       );
  //     //     }
  //     //     return setCurrentDate(new Date(new Date(currentDate).setMonth(0)));
  //     //   }
  //     //   if (datePortion === 'YYYY') {
  //     //     if (lastKeyPress && year <= 999) {
  //     //       return setCurrentDate(
  //     //         new Date(new Date(currentDate).setFullYear(year * 10))
  //     //       );
  //     //     }
  //     //     return setCurrentDate(new Date(new Date(currentDate).setFullYear(1)));
  //     //   }
  //     //   return null;
  //     // case '1':
  //     //   if (datePortion === 'DD') {
  //     //     if (lastKeyPress) {
  //     //       setInputSelectPosition(selectStart + 3);
  //     //       if (lastKeyPress === '0') date = 0;
  //     //       const newDate = date * 10 + 1;

  //     //       return setCurrentDate(
  //     //         new Date(
  //     //           new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
  //     //         )
  //     //       );
  //     //     }
  //     //     return setCurrentDate(new Date(new Date(currentDate).setDate(1)));
  //     //   }
  //     //   if (datePortion === 'MM') {
  //     //     if (lastKeyPress) {
  //     //       setInputSelectPosition(selectStart + 3);
  //     //       return setCurrentDate(
  //     //         new Date(
  //     //           new Date(currentDate).setMonth(lastKeyPress === '0' ? 0 : 10)
  //     //         )
  //     //       );
  //     //     }
  //     //     return setCurrentDate(new Date(new Date(currentDate).setMonth(0)));
  //     //   }
  //     //   if (datePortion === 'YYYY') {
  //     //     if (lastKeyPress && year <= 999) {
  //     //       return setCurrentDate(
  //     //         new Date(new Date(currentDate).setFullYear(year * 10))
  //     //       );
  //     //     }
  //     //     return setCurrentDate(new Date(new Date(currentDate).setFullYear(1)));
  //     //   }
  //     //   return null;
  //     // case '2':
  //     //   if (datePortion === 'DD') {
  //     //     if (lastKeyPress) {
  //     //       setInputSelectPosition(selectStart + 3);
  //     //       if (lastKeyPress === '0') date = 0;
  //     //       const newDate = date * 10 + 2;

  //     //       return setCurrentDate(
  //     //         new Date(
  //     //           new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
  //     //         )
  //     //       );
  //     //     }
  //     //     return setCurrentDate(new Date(new Date(currentDate).setDate(2)));
  //     //   }
  //     //   if (datePortion === 'MM') {
  //     //     if (lastKeyPress) {
  //     //       setInputSelectPosition(selectStart + 3);
  //     //       return setCurrentDate(
  //     //         new Date(
  //     //           new Date(currentDate).setMonth(lastKeyPress === '0' ? 1 : 11)
  //     //         )
  //     //       );
  //     //     }
  //     //     return setCurrentDate(new Date(new Date(currentDate).setMonth(1)));
  //     //   }
  //     //   if (datePortion === 'YYYY') {
  //     //     if (lastKeyPress && year <= 999) {
  //     //       return setCurrentDate(
  //     //         new Date(new Date(currentDate).setFullYear(year * 10 + 2))
  //     //       );
  //     //     }
  //     //     return setCurrentDate(new Date(new Date(currentDate).setFullYear(2)));
  //     //   }
  //     //   return null;
  //     // case '3':
  //     //   if (datePortion === 'DD') {
  //     //     if (lastKeyPress) {
  //     //       setInputSelectPosition(selectStart + 3);
  //     //       if (lastKeyPress === '0') date = 0;
  //     //       const newDate = date * 10 + 3;

  //     //       return setCurrentDate(
  //     //         new Date(
  //     //           new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
  //     //         )
  //     //       );
  //     //     }
  //     //     return setCurrentDate(new Date(new Date(currentDate).setDate(3)));
  //     //   }
  //     //   if (datePortion === 'MM') {
  //     //     setInputSelectPosition(selectStart + 3);
  //     //     return setCurrentDate(new Date(new Date(currentDate).setMonth(2)));
  //     //   }
  //     //   if (datePortion === 'YYYY') {
  //     //     if (lastKeyPress && year <= 999) {
  //     //       return setCurrentDate(
  //     //         new Date(new Date(currentDate).setFullYear(year * 10 + 3))
  //     //       );
  //     //     }
  //     //     return setCurrentDate(new Date(new Date(currentDate).setFullYear(3)));
  //     //   }
  //     //   return null;
  //     // case '4':
  //     // case '5':
  //     // case '6':
  //     // case '7':
  //     // case '8':
  //     // case '9':
  //     // if (datePortion === 'DD') {
  //     //   if (lastKeyPress) {
  //     //     setInputSelectPosition(selectStart + 3);
  //     //     if (lastKeyPress === '0') date = 0;
  //     //     const newDate = date * 10 + Number(e.key);

  //     //     return setCurrentDate(
  //     //       new Date(
  //     //         new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
  //     //       )
  //     //     );
  //     //   }
  //     //   return setCurrentDate(new Date(new Date(currentDate).setDate(3)));
  //     // }
  //     // if (datePortion === 'MM') {
  //     //   setInputSelectPosition(selectStart + 3);
  //     //   return setCurrentDate(
  //     //     new Date(new Date(currentDate).setMonth(Number(e.key) - 1))
  //     //   );
  //     // }
  //     // if (datePortion === 'YYYY') {
  //     //   if (lastKeyPress && year <= 999) {
  //     //     return setCurrentDate(
  //     //       new Date(
  //     //         new Date(currentDate).setFullYear(year * 10 + Number(e.key))
  //     //       )
  //     //     );
  //     //   }
  //     //   return setCurrentDate(
  //     //     new Date(new Date(currentDate).setFullYear(Number(e.key)))
  //     //   );
  //     // }
  //     // return null;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className={styles.container} ref={containerRef}>
      <InputDatePicker2Day
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        displayValue={formattedDay}
        currentDay={currentDay}
        daysInMonth={daysInMonth}
        inputRef={inputDayRef}
      />
      <p className={styles.inputDelimiter}>{delimiter}</p>
      <InputDatePicker2Month
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        displayValue={formattedMonth}
        currentMonth={currentMonth}
        inputRef={inputMonthRef}
      />
      <p className={styles.inputDelimiter}>{delimiter}</p>
      <InputDatePicker2Year
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        displayValue={formattedYear}
        currentYear={currentYear}
        inputRef={inputYearRef}
      />
    </div>
  );
}

export default InputDatePicker;
