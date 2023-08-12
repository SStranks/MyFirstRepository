import { useEffect, useRef, useState } from 'react';
import { formatDate, getNumberOfDaysInMonth } from './dateUtil';

interface IProps {
  currentDate?: Date;
  setCurrentDate?: React.Dispatch<React.SetStateAction<Date>>;
  min?: Date;
  max?: Date;
}

const inputDatePortion = (inputSelectPosition: number) => {
  return inputSelectPosition === 0
    ? 'DD'
    : inputSelectPosition === 3
    ? 'MM'
    : 'YYYY';
};

// NOTE:  Works - issue is detecting shift-tab focus event.
// const nextElementFocus = (element: Node) => {
//   const allFocusableElements = document.querySelectorAll(
//     'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'
//   );

//   // eslint-disable-next-line unicorn/prefer-spread
//   const curElementIndex = Array.from(allFocusableElements).findIndex(
//     (node: Node) => node.isEqualNode(element)
//   );
//   return (
//     allFocusableElements[curElementIndex + 1] as HTMLInputElement
//   ).focus();
// };

// TODO:  If min/max; disable month buttons and grey out + disable dates that fall outside boundary.
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
  const [inputSelectPosition, setInputSelectPosition] = useState<number | null>(
    null
  );
  const [lastKeyPress, setLastKeyPress] = useState<string | null>(null);
  const dropdownInputRef = useRef<HTMLInputElement>(null);

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

  const inputSelection = (position: number) => {
    let selectStart = position;
    let selectEnd = 0;
    const { current: input } = dropdownInputRef;
    input?.setSelectionRange(0, 0);
    switch (true) {
      case selectStart <= 2:
        selectStart = 0;
        selectEnd = 2;
        break;
      case selectStart >= 3 && selectStart <= 4:
        selectStart = 3;
        selectEnd = 5;
        break;
      case selectStart >= 5:
        selectStart = 6;
        selectEnd = 10;
        break;
      default:
    }
    return input?.setSelectionRange(selectStart, selectEnd);
  };

  // NOTE:  This is a workaround, but doesn't differentiate between clicks and key changing the selection.
  // Set focus to portion of input date. Can't use React 'onMouseDown'; fires before DOM element selection position is updated.
  // useEffect(() => {
  //   const selectionChange = (e: Event) => {
  //     console.log(e);
  //     if (document.activeElement === dropdownInputRef.current) {
  //       const selectStart = dropdownInputRef.current?.selectionStart || 0;
  //       console.log('FIRED');
  //       inputSelection(selectStart);
  //     }
  //   };
  //   document.addEventListener('selectionchange', selectionChange);
  //   return () =>
  //     document.removeEventListener('selectionchange', selectionChange);
  // });

  useEffect(() => {
    if (inputSelectPosition === null) return;
    inputSelection(inputSelectPosition);
  });

  // Set last key press; used in conjunction with date select position as a faux-focus determination.
  useEffect(() => {
    if (inputSelectPosition === null) return;
    setLastKeyPress(null);
  }, [inputSelectPosition]);

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const inputOnMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const inputOnMouseDown = (e: React.MouseEvent) => {
    setTimeout(() => {
      const input = e.target as HTMLInputElement;
      const selectStart = input.selectionStart;
      setInputSelectPosition(selectStart);
    }, 0);
  };

  // DEBUG:  Tabbing in/out goes to Body, then next element. Possible to skip body?
  const inputOnKey = (e: React.KeyboardEvent) => {
    e.preventDefault();
    const input = e.target as HTMLInputElement;
    const selectStart = input.selectionStart || 0;
    const datePortion = inputDatePortion(selectStart);
    let date = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const daysInMonth = getNumberOfDaysInMonth(year, month);
    setLastKeyPress(e.key);
    // console.log(e.key);

    switch (e.key) {
      case 'Backspace':
        // TODO:  Set to 'DD' etc.
        return null;
      case 'Tab':
        if (e.shiftKey) {
          return datePortion === 'DD'
            ? dropdownInputRef.current?.blur()
            : setInputSelectPosition(selectStart - 3);
        }
        return datePortion === 'YYYY'
          ? dropdownInputRef.current?.blur()
          : setInputSelectPosition(selectStart + 3);
      case 'ArrowLeft':
        return setInputSelectPosition(selectStart - 3);
      case 'ArrowRight':
        return setInputSelectPosition(selectStart + 3);
      case 'ArrowUp':
        if (datePortion === 'DD') {
          return setCurrentDate(
            new Date(
              new Date(currentDate).setDate(
                date + 1 > daysInMonth ? 1 : date + 1
              )
            )
          );
        }
        if (datePortion === 'MM') {
          return setCurrentDate(
            new Date(new Date(currentDate).setMonth(month + 1 > 12 ? 0 : month))
          );
        }
        return setCurrentDate(
          new Date(
            new Date(currentDate).setFullYear(year + 1 > 9999 ? 9999 : year + 1)
          )
        );
      case 'ArrowDown':
        if (datePortion === 'DD') {
          return setCurrentDate(
            new Date(
              new Date(currentDate).setDate(
                date - 1 < 1 ? daysInMonth : date - 1
              )
            )
          );
        }
        if (datePortion === 'MM') {
          return setCurrentDate(
            new Date(
              new Date(currentDate).setMonth(month - 1 < 1 ? 11 : month - 2)
            )
          );
        }
        return setCurrentDate(
          new Date(
            new Date(currentDate).setFullYear(year - 1 < 1 ? 1 : year - 1)
          )
        );
      case '0':
        if (datePortion === 'DD') {
          if (lastKeyPress) {
            setInputSelectPosition(selectStart + 3);
            const newDate = date * 10;
            return setCurrentDate(
              new Date(
                new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
              )
            );
          }
          return setCurrentDate(new Date(new Date(currentDate).setDate(1)));
        }
        if (datePortion === 'MM') {
          if (lastKeyPress) {
            setInputSelectPosition(selectStart + 3);
            return setCurrentDate(
              new Date(
                new Date(currentDate).setMonth(lastKeyPress === '0' ? 0 : 9)
              )
            );
          }
          return setCurrentDate(new Date(new Date(currentDate).setMonth(0)));
        }
        if (datePortion === 'YYYY') {
          if (lastKeyPress && year <= 999) {
            return setCurrentDate(
              new Date(new Date(currentDate).setFullYear(year * 10))
            );
          }
          return setCurrentDate(new Date(new Date(currentDate).setFullYear(1)));
        }
        return null;
      case '1':
        if (datePortion === 'DD') {
          if (lastKeyPress) {
            setInputSelectPosition(selectStart + 3);
            if (lastKeyPress === '0') date = 0;
            const newDate = date * 10 + 1;

            return setCurrentDate(
              new Date(
                new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
              )
            );
          }
          return setCurrentDate(new Date(new Date(currentDate).setDate(1)));
        }
        if (datePortion === 'MM') {
          if (lastKeyPress) {
            setInputSelectPosition(selectStart + 3);
            return setCurrentDate(
              new Date(
                new Date(currentDate).setMonth(lastKeyPress === '0' ? 0 : 10)
              )
            );
          }
          return setCurrentDate(new Date(new Date(currentDate).setMonth(0)));
        }
        if (datePortion === 'YYYY') {
          if (lastKeyPress && year <= 999) {
            return setCurrentDate(
              new Date(new Date(currentDate).setFullYear(year * 10))
            );
          }
          return setCurrentDate(new Date(new Date(currentDate).setFullYear(1)));
        }
        return null;
      case '2':
        if (datePortion === 'DD') {
          if (lastKeyPress) {
            setInputSelectPosition(selectStart + 3);
            if (lastKeyPress === '0') date = 0;
            const newDate = date * 10 + 2;

            return setCurrentDate(
              new Date(
                new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
              )
            );
          }
          return setCurrentDate(new Date(new Date(currentDate).setDate(2)));
        }
        if (datePortion === 'MM') {
          if (lastKeyPress) {
            setInputSelectPosition(selectStart + 3);
            return setCurrentDate(
              new Date(
                new Date(currentDate).setMonth(lastKeyPress === '0' ? 1 : 11)
              )
            );
          }
          return setCurrentDate(new Date(new Date(currentDate).setMonth(1)));
        }
        if (datePortion === 'YYYY') {
          if (lastKeyPress && year <= 999) {
            return setCurrentDate(
              new Date(new Date(currentDate).setFullYear(year * 10 + 2))
            );
          }
          return setCurrentDate(new Date(new Date(currentDate).setFullYear(2)));
        }
        return null;
      case '3':
        if (datePortion === 'DD') {
          if (lastKeyPress) {
            setInputSelectPosition(selectStart + 3);
            if (lastKeyPress === '0') date = 0;
            const newDate = date * 10 + 3;

            return setCurrentDate(
              new Date(
                new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
              )
            );
          }
          return setCurrentDate(new Date(new Date(currentDate).setDate(3)));
        }
        if (datePortion === 'MM') {
          setInputSelectPosition(selectStart + 3);
          return setCurrentDate(new Date(new Date(currentDate).setMonth(2)));
        }
        if (datePortion === 'YYYY') {
          if (lastKeyPress && year <= 999) {
            return setCurrentDate(
              new Date(new Date(currentDate).setFullYear(year * 10 + 3))
            );
          }
          return setCurrentDate(new Date(new Date(currentDate).setFullYear(3)));
        }
        return null;
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (datePortion === 'DD') {
          if (lastKeyPress) {
            setInputSelectPosition(selectStart + 3);
            if (lastKeyPress === '0') date = 0;
            const newDate = date * 10 + Number(e.key);

            return setCurrentDate(
              new Date(
                new Date(currentDate).setDate(Math.min(newDate, daysInMonth))
              )
            );
          }
          return setCurrentDate(new Date(new Date(currentDate).setDate(3)));
        }
        if (datePortion === 'MM') {
          setInputSelectPosition(selectStart + 3);
          return setCurrentDate(
            new Date(new Date(currentDate).setMonth(Number(e.key) - 1))
          );
        }
        if (datePortion === 'YYYY') {
          if (lastKeyPress && year <= 999) {
            return setCurrentDate(
              new Date(
                new Date(currentDate).setFullYear(year * 10 + Number(e.key))
              )
            );
          }
          return setCurrentDate(
            new Date(new Date(currentDate).setFullYear(Number(e.key)))
          );
        }
        return null;
      default:
        return null;
    }
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const inputOnFocus = () => {
    setInputSelectPosition(0);
  };

  const inputOnBlur = () => {
    setInputSelectPosition(null);
  };

  return (
    <input
      type="text"
      readOnly
      ref={dropdownInputRef}
      value={formatDate(currentDate)}
      // placeholder="dd/mm/yyyy"
      onMouseUp={inputOnMouseUp}
      onMouseDown={inputOnMouseDown}
      onFocus={inputOnFocus}
      onBlur={inputOnBlur}
      onKeyDown={inputOnKey}
      onMouseMove={(e) => e.preventDefault()} // Prevent highlighting
      onTouchMove={(e) => e.preventDefault()} // Prevent highlighting
    />
  );
}

export default InputDatePicker;
