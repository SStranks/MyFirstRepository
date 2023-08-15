import { RefObject, useRef, useState } from 'react';
import styles from './InputDatePicker.module.scss';

interface IProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  displayValue: string;
  currentDay: number;
  daysInMonth: number;
  inputRef: RefObject<HTMLInputElement>;
  rotateFocus: () => void;
}

function InputDatePicker2Day(props: IProps): JSX.Element {
  const {
    currentDate,
    setCurrentDate,
    displayValue,
    currentDay,
    daysInMonth,
    inputRef,
    rotateFocus,
  } = props;
  const [lastKeyPress, setLastKeyPress] = useState<string | null>(null);
  const displayValueRef = useRef<HTMLParagraphElement>(null);

  const inputOnKeyDown = (e: React.KeyboardEvent) => {
    // console.log(e.key);
    setLastKeyPress(e.key);
    let date = currentDay;

    switch (e.key) {
      case 'Backspace':
        // TODO:  Set to 'DD' etc.
        return null;
      case 'ArrowUp':
        e.preventDefault();
        return setCurrentDate(
          new Date(
            new Date(currentDate).setDate(
              currentDay + 1 > daysInMonth ? 1 : currentDay + 1
            )
          )
        );
      case 'ArrowDown':
        e.preventDefault();
        return setCurrentDate(
          new Date(
            new Date(currentDate).setDate(
              currentDay - 1 < 1 ? daysInMonth : currentDay - 1
            )
          )
        );
      case '0':
        if (lastKeyPress) {
          const newDate = date * 10;
          rotateFocus();
          return setCurrentDate(
            new Date(
              new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
            )
          );
        }
        return setCurrentDate(new Date(new Date(currentDate).setDate(1)));
      case '1':
        if (lastKeyPress) {
          if (lastKeyPress === '0') date = 0;
          const newDate = date * 10 + 1;
          rotateFocus();
          return setCurrentDate(
            new Date(
              new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
            )
          );
        }
        return setCurrentDate(new Date(new Date(currentDate).setDate(1)));
      case '2':
        if (lastKeyPress) {
          if (lastKeyPress === '0') date = 0;
          const newDate = date * 10 + 2;
          rotateFocus();
          return setCurrentDate(
            new Date(
              new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
            )
          );
        }
        return setCurrentDate(new Date(new Date(currentDate).setDate(2)));
      case '3':
        if (lastKeyPress) {
          if (lastKeyPress === '0') date = 0;
          const newDate = date * 10 + 3;
          rotateFocus();
          return setCurrentDate(
            new Date(
              new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
            )
          );
        }
        return setCurrentDate(new Date(new Date(currentDate).setDate(3)));
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (lastKeyPress) {
          if (lastKeyPress === '0') date = 0;
          const newDate = date * 10 + Number(e.key);
          rotateFocus();
          return setCurrentDate(
            new Date(
              new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
            )
          );
        }
        return setCurrentDate(
          new Date(new Date(currentDate).setDate(Number(e.key)))
        );
      default:
        return null;
    }
  };

  const inputOnFocus = () => {
    displayValueRef.current?.classList.add(styles.active);
  };

  const inputOnBlur = () => {
    displayValueRef.current?.classList.remove(styles.active);
    setLastKeyPress(null);
  };

  return (
    <>
      <label htmlFor="inputDay">
        <p className={styles.displayValue} ref={displayValueRef}>
          {displayValue}
        </p>
      </label>
      <input
        type="text"
        className={styles.input}
        id="inputDay"
        ref={inputRef}
        readOnly
        value={displayValue}
        onKeyDown={inputOnKeyDown}
        onMouseMove={(e) => e.preventDefault()} // Prevent highlighting
        onTouchMove={(e) => e.preventDefault()} // Prevent highlighting
        onFocus={inputOnFocus}
        onBlur={inputOnBlur}
      />
    </>
  );
}

export default InputDatePicker2Day;
