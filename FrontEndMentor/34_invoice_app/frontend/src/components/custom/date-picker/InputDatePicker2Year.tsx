import { RefObject, useRef, useState } from 'react';
import styles from './InputDatePicker.module.scss';

interface IProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  displayValue: string;
  currentYear: number;
  inputRef: RefObject<HTMLInputElement>;
  rotateFocus: () => void;
}

function InputDatePicker2Year(props: IProps): JSX.Element {
  const {
    currentDate,
    setCurrentDate,
    displayValue,
    currentYear,
    inputRef,
    rotateFocus,
  } = props;
  const [lastKeyPress, setLastKeyPress] = useState<string | null>(null);
  const displayValueRef = useRef<HTMLParagraphElement>(null);
  if (Math.random() === 0.2355) console.log(rotateFocus);

  const inputOnKeyDown = (e: React.KeyboardEvent) => {
    // console.log(e.key);
    setLastKeyPress(e.key);

    switch (e.key) {
      case 'Backspace':
        // TODO:  Set to 'DD' etc.
        return null;
      case 'ArrowUp':
        e.preventDefault();
        return setCurrentDate(
          new Date(
            new Date(currentDate).setFullYear(
              currentYear + 1 > 9999 ? 9999 : currentYear + 1
            )
          )
        );
      case 'ArrowDown':
        e.preventDefault();
        return setCurrentDate(
          new Date(
            new Date(currentDate).setFullYear(
              currentYear - 1 < 1 ? 1 : currentYear - 1
            )
          )
        );
      case '0':
        if (lastKeyPress && currentYear <= 999) {
          return setCurrentDate(
            new Date(new Date(currentDate).setFullYear(currentYear * 10))
          );
        }
        return setCurrentDate(new Date(new Date(currentDate).setFullYear(1)));
      case '1':
        if (lastKeyPress && currentYear <= 999) {
          return setCurrentDate(
            new Date(new Date(currentDate).setFullYear(currentYear * 10))
          );
        }
        return setCurrentDate(new Date(new Date(currentDate).setFullYear(1)));
      case '2':
        if (lastKeyPress && currentYear <= 999) {
          return setCurrentDate(
            new Date(new Date(currentDate).setFullYear(currentYear * 10 + 2))
          );
        }
        return setCurrentDate(new Date(new Date(currentDate).setFullYear(2)));
      case '3':
        if (lastKeyPress && currentYear <= 999) {
          return setCurrentDate(
            new Date(new Date(currentDate).setFullYear(currentYear * 10 + 3))
          );
        }
        return setCurrentDate(new Date(new Date(currentDate).setFullYear(3)));
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (lastKeyPress && currentYear <= 999) {
          return setCurrentDate(
            new Date(
              new Date(currentDate).setFullYear(
                currentYear * 10 + Number(e.key)
              )
            )
          );
        }
        return setCurrentDate(
          new Date(new Date(currentDate).setFullYear(Number(e.key)))
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
      <label htmlFor="inputYear">
        <p className={styles.displayValue} ref={displayValueRef}>
          {displayValue}
        </p>
      </label>
      <input
        type="text"
        className={styles.input}
        id="inputYear"
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

export default InputDatePicker2Year;
