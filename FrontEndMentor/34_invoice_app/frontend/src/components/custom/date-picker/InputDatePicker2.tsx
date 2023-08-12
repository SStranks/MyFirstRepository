import { useRef, useState } from 'react';
import styles from './InputDatePicker.module.scss';
// import { getNumberOfDaysInMonth } from './dateUtil';

interface IProps {
  currentDate?: Date;
  setCurrentDate?: React.Dispatch<React.SetStateAction<Date>>;
  min?: Date;
  max?: Date;
}

function InputDatePicker(props: IProps): JSX.Element {
  const {
    currentDate: currentDateProp,
    setCurrentDate: setCurrentDateProp,
    min,
    max,
  } = props;
  const [currentDateInternal, setCurrentDateInternal] = useState<Date>(() => {
    return currentDateProp === undefined ? new Date() : currentDateProp;
  });
  const [inputValueDay, setInputValueDay] = useState<number | string>(() =>
    currentDateInternal.getDate()
  );
  const [inputValueMonth, setInputValueMonth] = useState<number | string>(
    () => currentDateInternal.getMonth() + 1
  );
  const [inputValueYear, setInputValueYear] = useState<number | string>(() =>
    currentDateInternal.getFullYear()
  );
  // const [lastKeyPress, setLastKeyPress] = useState<string | null>(null);
  const dropdownInputRef = useRef<HTMLInputElement>(null);
  const fauxInput1 = useRef<HTMLParagraphElement>(null);
  const fauxInput2 = useRef<HTMLParagraphElement>(null);
  const fauxInput3 = useRef<HTMLParagraphElement>(null);

  // TEMP DEV:  .
  if (Math.random() === 0.2345) {
    console.log(
      setInputValueDay,
      setInputValueMonth,
      setInputValueYear,
      setCurrentDateInternal,
      min,
      max,
      setCurrentDateProp
    );
  }

  // If Date is managed by parent component, use that components state setter function.
  // const setCurrentDate = (date: Date) => {
  //   let constrainDate;
  //   if (min) {
  //     constrainDate = date < min ? min : date;
  //   }
  //   if (max) {
  //     constrainDate = date > max ? max : date;
  //   }
  //   if (setCurrentDateProp === undefined)
  //     return setCurrentDateInternal(constrainDate || date);
  //   return setCurrentDateProp(constrainDate || date);
  // };

  // If Date is managed by parent component, use that components state value.
  // const currentDate =
  //   currentDateProp === undefined ? currentDateInternal : currentDateProp;

  // Set last key press; used in conjunction with date select position as a faux-focus determination.
  // useEffect(() => {
  //   if (inputSelectPosition === null) return;
  //   setLastKeyPress(null);
  // }, [inputSelectPosition]);

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const inputOnMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const inputOnKey = (e: React.KeyboardEvent) => {
    e.preventDefault();
    // const input = e.target as HTMLInputElement;
    // const selectStart = input.selectionStart || 0;
    // let date = currentDate.getDate();
    // const month = currentDate.getMonth() + 1;
    // const year = currentDate.getFullYear();
    // const daysInMonth = getNumberOfDaysInMonth(year, month);
    // setLastKeyPress(e.key);
    console.log(e.key, e.target);

    switch (e.key) {
      case 'Backspace':
        // TODO:  Set to 'DD' etc.
        return null;
      case 'ArrowLeft':
        return e.target.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true })
        );
      case 'ArrowRight':
        return e.target.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'Tab', bubbles: true })
        );
      case 'ArrowUp':
        return setInputValueDay(9);
      // case 'ArrowUp':
      //   if (datePortion === 'DD') {
      //     return setCurrentDate(
      //       new Date(
      //         new Date(currentDate).setDate(
      //           date + 1 > daysInMonth ? 1 : date + 1
      //         )
      //       )
      //     );
      //   }
      //   if (datePortion === 'MM') {
      //     return setCurrentDate(
      //       new Date(new Date(currentDate).setMonth(month + 1 > 12 ? 0 : month))
      //     );
      //   }
      //   return setCurrentDate(
      //     new Date(
      //       new Date(currentDate).setFullYear(year + 1 > 9999 ? 9999 : year + 1)
      //     )
      //   );
      // case 'ArrowDown':
      //   if (datePortion === 'DD') {
      //     return setCurrentDate(
      //       new Date(
      //         new Date(currentDate).setDate(
      //           date - 1 < 1 ? daysInMonth : date - 1
      //         )
      //       )
      //     );
      //   }
      //   if (datePortion === 'MM') {
      //     return setCurrentDate(
      //       new Date(
      //         new Date(currentDate).setMonth(month - 1 < 1 ? 11 : month - 2)
      //       )
      //     );
      //   }
      //   return setCurrentDate(
      //     new Date(
      //       new Date(currentDate).setFullYear(year - 1 < 1 ? 1 : year - 1)
      //     )
      //   );
      // case '0':
      //   if (datePortion === 'DD') {
      //     if (lastKeyPress) {
      //       setInputSelectPosition(selectStart + 3);
      //       const newDate = date * 10;
      //       return setCurrentDate(
      //         new Date(
      //           new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
      //         )
      //       );
      //     }
      //     return setCurrentDate(new Date(new Date(currentDate).setDate(1)));
      //   }
      //   if (datePortion === 'MM') {
      //     if (lastKeyPress) {
      //       setInputSelectPosition(selectStart + 3);
      //       return setCurrentDate(
      //         new Date(
      //           new Date(currentDate).setMonth(lastKeyPress === '0' ? 0 : 9)
      //         )
      //       );
      //     }
      //     return setCurrentDate(new Date(new Date(currentDate).setMonth(0)));
      //   }
      //   if (datePortion === 'YYYY') {
      //     if (lastKeyPress && year <= 999) {
      //       return setCurrentDate(
      //         new Date(new Date(currentDate).setFullYear(year * 10))
      //       );
      //     }
      //     return setCurrentDate(new Date(new Date(currentDate).setFullYear(1)));
      //   }
      //   return null;
      // case '1':
      //   if (datePortion === 'DD') {
      //     if (lastKeyPress) {
      //       setInputSelectPosition(selectStart + 3);
      //       if (lastKeyPress === '0') date = 0;
      //       const newDate = date * 10 + 1;

      //       return setCurrentDate(
      //         new Date(
      //           new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
      //         )
      //       );
      //     }
      //     return setCurrentDate(new Date(new Date(currentDate).setDate(1)));
      //   }
      //   if (datePortion === 'MM') {
      //     if (lastKeyPress) {
      //       setInputSelectPosition(selectStart + 3);
      //       return setCurrentDate(
      //         new Date(
      //           new Date(currentDate).setMonth(lastKeyPress === '0' ? 0 : 10)
      //         )
      //       );
      //     }
      //     return setCurrentDate(new Date(new Date(currentDate).setMonth(0)));
      //   }
      //   if (datePortion === 'YYYY') {
      //     if (lastKeyPress && year <= 999) {
      //       return setCurrentDate(
      //         new Date(new Date(currentDate).setFullYear(year * 10))
      //       );
      //     }
      //     return setCurrentDate(new Date(new Date(currentDate).setFullYear(1)));
      //   }
      //   return null;
      // case '2':
      //   if (datePortion === 'DD') {
      //     if (lastKeyPress) {
      //       setInputSelectPosition(selectStart + 3);
      //       if (lastKeyPress === '0') date = 0;
      //       const newDate = date * 10 + 2;

      //       return setCurrentDate(
      //         new Date(
      //           new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
      //         )
      //       );
      //     }
      //     return setCurrentDate(new Date(new Date(currentDate).setDate(2)));
      //   }
      //   if (datePortion === 'MM') {
      //     if (lastKeyPress) {
      //       setInputSelectPosition(selectStart + 3);
      //       return setCurrentDate(
      //         new Date(
      //           new Date(currentDate).setMonth(lastKeyPress === '0' ? 1 : 11)
      //         )
      //       );
      //     }
      //     return setCurrentDate(new Date(new Date(currentDate).setMonth(1)));
      //   }
      //   if (datePortion === 'YYYY') {
      //     if (lastKeyPress && year <= 999) {
      //       return setCurrentDate(
      //         new Date(new Date(currentDate).setFullYear(year * 10 + 2))
      //       );
      //     }
      //     return setCurrentDate(new Date(new Date(currentDate).setFullYear(2)));
      //   }
      //   return null;
      // case '3':
      //   if (datePortion === 'DD') {
      //     if (lastKeyPress) {
      //       setInputSelectPosition(selectStart + 3);
      //       if (lastKeyPress === '0') date = 0;
      //       const newDate = date * 10 + 3;

      //       return setCurrentDate(
      //         new Date(
      //           new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
      //         )
      //       );
      //     }
      //     return setCurrentDate(new Date(new Date(currentDate).setDate(3)));
      //   }
      //   if (datePortion === 'MM') {
      //     setInputSelectPosition(selectStart + 3);
      //     return setCurrentDate(new Date(new Date(currentDate).setMonth(2)));
      //   }
      //   if (datePortion === 'YYYY') {
      //     if (lastKeyPress && year <= 999) {
      //       return setCurrentDate(
      //         new Date(new Date(currentDate).setFullYear(year * 10 + 3))
      //       );
      //     }
      //     return setCurrentDate(new Date(new Date(currentDate).setFullYear(3)));
      //   }
      //   return null;
      // case '4':
      // case '5':
      // case '6':
      // case '7':
      // case '8':
      // case '9':
      // if (datePortion === 'DD') {
      //   if (lastKeyPress) {
      //     setInputSelectPosition(selectStart + 3);
      //     if (lastKeyPress === '0') date = 0;
      //     const newDate = date * 10 + Number(e.key);

      //     return setCurrentDate(
      //       new Date(
      //         new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
      //       )
      //     );
      //   }
      //   return setCurrentDate(new Date(new Date(currentDate).setDate(3)));
      // }
      // if (datePortion === 'MM') {
      //   setInputSelectPosition(selectStart + 3);
      //   return setCurrentDate(
      //     new Date(new Date(currentDate).setMonth(Number(e.key) - 1))
      //   );
      // }
      // if (datePortion === 'YYYY') {
      //   if (lastKeyPress && year <= 999) {
      //     return setCurrentDate(
      //       new Date(
      //         new Date(currentDate).setFullYear(year * 10 + Number(e.key))
      //       )
      //     );
      //   }
      //   return setCurrentDate(
      //     new Date(new Date(currentDate).setFullYear(Number(e.key)))
      //   );
      // }
      // return null;
      default:
        return null;
    }
  };

  const delimiter = '/';

  return (
    <div className={styles.container}>
      <label htmlFor="inputDay">
        <p className={styles.displayValue} ref={fauxInput1}>
          {inputValueDay}
        </p>
      </label>
      <p className={styles.inputDelimiter}>{delimiter}</p>
      <label htmlFor="inputMonth">
        <p className={styles.displayValue} ref={fauxInput2}>
          {inputValueMonth}
        </p>
      </label>
      <p className={styles.inputDelimiter}>{delimiter}</p>
      <label htmlFor="inputYear">
        <p className={styles.displayValue} ref={fauxInput3}>
          {inputValueYear}
        </p>
      </label>
      <input
        type="text"
        className={styles.input}
        id="inputDay"
        readOnly
        ref={dropdownInputRef}
        value={inputValueDay}
        onMouseUp={inputOnMouseUp}
        // onMouseDown={inputOnMouseDown}
        onKeyDown={inputOnKey}
        onMouseMove={(e) => e.preventDefault()} // Prevent highlighting
        onTouchMove={(e) => e.preventDefault()} // Prevent highlighting
        onFocus={() => fauxInput1.current?.classList.add(styles.active)}
        onBlur={() => fauxInput1.current?.classList.remove(styles.active)}
      />
      <input
        type="text"
        className={styles.input}
        id="inputMonth"
        readOnly
        ref={dropdownInputRef}
        value={inputValueMonth}
        onMouseUp={inputOnMouseUp}
        // onMouseDown={inputOnMouseDown}
        // onKeyDown={inputOnKey}
        onMouseMove={(e) => e.preventDefault()} // Prevent highlighting
        onTouchMove={(e) => e.preventDefault()} // Prevent highlighting
        onFocus={() => fauxInput2.current?.classList.add(styles.active)}
        onBlur={() => fauxInput2.current?.classList.remove(styles.active)}
      />
      <input
        type="text"
        className={styles.input}
        id="inputYear"
        readOnly
        ref={dropdownInputRef}
        value={inputValueYear}
        onMouseUp={inputOnMouseUp}
        // onMouseDown={inputOnMouseDown}
        // onKeyDown={inputOnKey}
        onMouseMove={(e) => e.preventDefault()} // Prevent highlighting
        onTouchMove={(e) => e.preventDefault()} // Prevent highlighting
        onFocus={() => fauxInput3.current?.classList.add(styles.active)}
        onBlur={() => fauxInput3.current?.classList.remove(styles.active)}
      />
    </div>
  );
}

export default InputDatePicker;
