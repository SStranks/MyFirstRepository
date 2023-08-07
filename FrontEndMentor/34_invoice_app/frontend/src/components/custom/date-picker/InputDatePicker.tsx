import { useEffect, useRef, useState } from 'react';
import { formatDate, getNumberOfDaysInMonth } from './dateUtil';

interface IProps {
  currentDate?: Date;
  setCurrentDate?: React.Dispatch<React.SetStateAction<Date>>;
}

const inputDatePortion = (inputSelectPosition: number) => {
  return inputSelectPosition === 0
    ? 'DD'
    : inputSelectPosition === 3
    ? 'MM'
    : 'YYYY';
};

// TODO:  Padding zeros on years < 999
function InputDatePicker(props: IProps): JSX.Element {
  const { currentDate: currentDateProp, setCurrentDate: setCurrentDateProp } =
    props;
  const [currentDateInternal, setCurrentDateInternal] = useState<Date>(() => {
    return currentDateProp === undefined ? new Date() : currentDateProp;
  });
  const [inputSelectPosition, setInputSelectPosition] = useState<number | null>(
    null
  );
  const [lastKeyPress, setLastKeyPress] = useState<string | null>(null);
  const [datePortionHasFocus, setDatePortionHasFocus] = useState<boolean>();
  const dropdownInputRef = useRef<HTMLInputElement>(null);

  // If Date is managed by parent component, use that components state setter function.
  const setCurrentDate = (date: Date) => {
    if (setCurrentDateProp === undefined) return setCurrentDateInternal(date);
    return setCurrentDateProp(date);
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
    setDatePortionHasFocus(selectStart === 0);
    return input?.setSelectionRange(selectStart, selectEnd);
  };

  // Set focus to portion of input date
  useEffect(() => {
    if (inputSelectPosition === null) return;
    inputSelection(inputSelectPosition);
  });

  const incrementValue = (selectStart: number) => {
    const datePortion = inputDatePortion(selectStart);
    switch (datePortion) {
      case 'DD':
        return setCurrentDate(
          new Date(new Date(currentDate).setDate(currentDate.getDate() + 1))
        );
      case 'MM':
        return setCurrentDate(
          new Date(new Date(currentDate).setMonth(currentDate.getMonth() + 1))
        );
      case 'YYYY':
        return setCurrentDate(
          new Date(
            new Date(currentDate).setFullYear(currentDate.getFullYear() + 1)
          )
        );
      default:
        return null;
    }
  };

  const decrementValue = (selectStart: number) => {
    const datePortion = inputDatePortion(selectStart);
    switch (datePortion) {
      case 'DD':
        return setCurrentDate(
          new Date(new Date(currentDate).setDate(currentDate.getDate() - 1))
        );
      case 'MM':
        return setCurrentDate(
          new Date(new Date(currentDate).setMonth(currentDate.getMonth() - 1))
        );
      case 'YYYY':
        return setCurrentDate(
          new Date(
            new Date(currentDate).setFullYear(currentDate.getFullYear() - 1)
          )
        );
      default:
        return null;
    }
  };

  const inputOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const input = e.target as HTMLInputElement;
    const selectStart = input.selectionStart;
    setInputSelectPosition(selectStart);
  };

  // DEBUG:  When DD is 02, swtiching to MM, then back, first press of 1 || 2 sets it immediately to 11 || 22
  const inputOnKey = (e: React.KeyboardEvent) => {
    e.preventDefault();
    const input = e.target as HTMLInputElement;
    const selectStart = input.selectionStart || 0;
    const datePortion = inputDatePortion(selectStart);
    setLastKeyPress(e.key);
    console.log(e.key, lastKeyPress);

    switch (e.key) {
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
        return incrementValue(selectStart);
      case 'ArrowDown':
        return decrementValue(selectStart);
      case '0':
        if (datePortion === 'DD') {
          switch (true) {
            case datePortionHasFocus && lastKeyPress === '1': {
              setInputSelectPosition(selectStart + 3);
              return setCurrentDate(
                new Date(new Date(currentDate).setDate(10))
              );
            }
            case datePortionHasFocus && lastKeyPress === '2': {
              setInputSelectPosition(selectStart + 3);
              return setCurrentDate(
                new Date(new Date(currentDate).setDate(20))
              );
            }
            case datePortionHasFocus && lastKeyPress === '3': {
              const month = currentDate.getMonth() + 1;
              const year = currentDate.getFullYear();
              const daysInMonth = getNumberOfDaysInMonth(year, month);
              setInputSelectPosition(selectStart + 3);

              return setCurrentDate(
                new Date(
                  new Date(currentDate).setDate(
                    daysInMonth >= 30 ? 30 : daysInMonth
                  )
                )
              );
            }
            default:
              if (lastKeyPress === '0') {
                setInputSelectPosition(selectStart + 3);
                setCurrentDate(new Date(new Date(currentDate).setDate(1)));
              }
          }
        }
        if (datePortion === 'MM') {
          return setCurrentDate(new Date(new Date(currentDate).setMonth(0)));
        }
        if (datePortion === 'YYYY') {
          const year = currentDate.getFullYear();
          switch (true) {
            case year <= 999:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(year * 10))
              );
            default:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(1))
              );
          }
        }
        return null;
      case '1':
        if (datePortion === 'DD') {
          const date = currentDate.getDate();
          switch (true) {
            case date <= 2 && lastKeyPress !== '0': {
              setInputSelectPosition(selectStart + 3);
              return setCurrentDate(
                new Date(new Date(currentDate).setDate(date * 10 + 1))
              );
            }
            case date === 3: {
              const month = currentDate.getMonth() + 1;
              const year = currentDate.getFullYear();
              const daysInMonth = getNumberOfDaysInMonth(year, month);
              setInputSelectPosition(selectStart + 3);

              return setCurrentDate(
                new Date(
                  new Date(currentDate).setDate(
                    daysInMonth >= 30 ? 30 : daysInMonth
                  )
                )
              );
            }
            default:
              if (lastKeyPress === '0') setInputSelectPosition(selectStart + 3);
              return setCurrentDate(new Date(new Date(currentDate).setDate(1)));
          }
        }
        if (datePortion === 'MM') {
          const month = currentDate.getMonth() + 1;
          if (month === 1) setInputSelectPosition(selectStart + 3);
          return setCurrentDate(
            new Date(new Date(currentDate).setMonth(month === 1 ? 10 : 0))
          );
        }

        if (datePortion === 'YYYY') {
          const year = currentDate.getFullYear();
          switch (true) {
            case year <= 999:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(year * 10 + 1))
              );
            default:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(1))
              );
          }
        }
        return null;
      case '2':
        if (datePortion === 'DD') {
          const date = currentDate.getDate();
          switch (true) {
            case date <= 2 && lastKeyPress !== '0': {
              setInputSelectPosition(selectStart + 3);
              return setCurrentDate(
                new Date(new Date(currentDate).setDate(date * 10 + 2))
              );
            }
            default: {
              if (lastKeyPress === '0') setInputSelectPosition(selectStart + 3);
              return setCurrentDate(new Date(new Date(currentDate).setDate(2)));
            }
          }
        }

        if (datePortion === 'MM') {
          const month = currentDate.getMonth() + 1;
          if (month === 1) setInputSelectPosition(selectStart + 3);
          return setCurrentDate(
            new Date(new Date(currentDate).setMonth(month === 1 ? 11 : 1))
          );
        }
        if (datePortion === 'YYYY') {
          const year = currentDate.getFullYear();
          switch (true) {
            case year <= 999:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(year * 10 + 2))
              );
            default:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(2))
              );
          }
        }
        return null;
      case '3':
        if (datePortion === 'DD') {
          const date = currentDate.getDate();
          switch (true) {
            case lastKeyPress === '0':
              setInputSelectPosition(selectStart + 3);
              return setCurrentDate(new Date(new Date(currentDate).setDate(3)));
            case (date === 1 || date === 2) && lastKeyPress !== '0': {
              setInputSelectPosition(selectStart + 3);
              return setCurrentDate(
                new Date(new Date(currentDate).setDate(date * 10 + 3))
              );
            }
            case lastKeyPress === '3': {
              const month = currentDate.getMonth() + 1;
              const year = currentDate.getFullYear();
              const daysInMonth = getNumberOfDaysInMonth(year, month);
              setInputSelectPosition(selectStart + 3);

              return setCurrentDate(
                new Date(new Date(currentDate).setDate(daysInMonth))
              );
            }
            default: {
              return setCurrentDate(new Date(new Date(currentDate).setDate(3)));
            }
          }
        }

        if (datePortion === 'MM') {
          setInputSelectPosition(selectStart + 3);
          return setCurrentDate(new Date(new Date(currentDate).setMonth(2)));
        }
        if (datePortion === 'YYYY') {
          const year = currentDate.getFullYear();
          switch (true) {
            case year <= 999:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(year * 10 + 3))
              );
            default:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(3))
              );
          }
        }
        return null;
      case '4':
        if (datePortion === 'DD') {
          const date = currentDate.getDate();
          setInputSelectPosition(selectStart + 3);
          switch (true) {
            case date <= 2: {
              return setCurrentDate(
                new Date(new Date(currentDate).setDate(date * 10 + 4))
              );
            }
            case lastKeyPress === '3': {
              const month = currentDate.getMonth() + 1;
              const year = currentDate.getFullYear();
              const daysInMonth = getNumberOfDaysInMonth(year, month);
              setInputSelectPosition(selectStart + 3);

              return setCurrentDate(
                new Date(new Date(currentDate).setDate(daysInMonth))
              );
            }
            default: {
              return setCurrentDate(new Date(new Date(currentDate).setDate(4)));
            }
          }
        }
        if (datePortion === 'MM') {
          setInputSelectPosition(selectStart + 3);
          return setCurrentDate(new Date(new Date(currentDate).setMonth(3)));
        }
        if (datePortion === 'YYYY') {
          const year = currentDate.getFullYear();
          switch (true) {
            case year <= 999:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(year * 10 + 4))
              );
            default:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(4))
              );
          }
        }
        return null;
      case '5':
        if (datePortion === 'DD') {
          const date = currentDate.getDate();
          setInputSelectPosition(selectStart + 3);
          switch (true) {
            case date <= 2: {
              return setCurrentDate(
                new Date(new Date(currentDate).setDate(date * 10 + 5))
              );
            }
            case lastKeyPress === '3': {
              const month = currentDate.getMonth() + 1;
              const year = currentDate.getFullYear();
              const daysInMonth = getNumberOfDaysInMonth(year, month);
              setInputSelectPosition(selectStart + 3);

              return setCurrentDate(
                new Date(new Date(currentDate).setDate(daysInMonth))
              );
            }
            default: {
              return setCurrentDate(new Date(new Date(currentDate).setDate(5)));
            }
          }
        }
        if (datePortion === 'MM') {
          setInputSelectPosition(selectStart + 3);
          return setCurrentDate(new Date(new Date(currentDate).setMonth(4)));
        }
        if (datePortion === 'YYYY') {
          const year = currentDate.getFullYear();
          switch (true) {
            case year <= 999:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(year * 10 + 5))
              );
            default:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(5))
              );
          }
        }
        return null;
      case '6':
        if (datePortion === 'DD') {
          const date = currentDate.getDate();
          setInputSelectPosition(selectStart + 3);
          switch (true) {
            case date <= 2: {
              return setCurrentDate(
                new Date(new Date(currentDate).setDate(date * 10 + 6))
              );
            }
            case lastKeyPress === '3': {
              const month = currentDate.getMonth() + 1;
              const year = currentDate.getFullYear();
              const daysInMonth = getNumberOfDaysInMonth(year, month);
              setInputSelectPosition(selectStart + 3);

              return setCurrentDate(
                new Date(new Date(currentDate).setDate(daysInMonth))
              );
            }
            default: {
              return setCurrentDate(new Date(new Date(currentDate).setDate(6)));
            }
          }
        }
        if (datePortion === 'MM') {
          setInputSelectPosition(selectStart + 3);
          return setCurrentDate(new Date(new Date(currentDate).setMonth(5)));
        }
        if (datePortion === 'YYYY') {
          const year = currentDate.getFullYear();
          switch (true) {
            case year <= 999:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(year * 10 + 6))
              );
            default:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(6))
              );
          }
        }
        return null;
      case '7':
        if (datePortion === 'DD') {
          const date = currentDate.getDate();
          setInputSelectPosition(selectStart + 3);
          switch (true) {
            case date <= 2: {
              return setCurrentDate(
                new Date(new Date(currentDate).setDate(date * 10 + 7))
              );
            }
            case lastKeyPress === '3': {
              const month = currentDate.getMonth() + 1;
              const year = currentDate.getFullYear();
              const daysInMonth = getNumberOfDaysInMonth(year, month);
              setInputSelectPosition(selectStart + 3);

              return setCurrentDate(
                new Date(new Date(currentDate).setDate(daysInMonth))
              );
            }
            default: {
              return setCurrentDate(new Date(new Date(currentDate).setDate(7)));
            }
          }
        }
        if (datePortion === 'MM') {
          setInputSelectPosition(selectStart + 3);
          return setCurrentDate(new Date(new Date(currentDate).setMonth(6)));
        }
        if (datePortion === 'YYYY') {
          const year = currentDate.getFullYear();
          switch (true) {
            case year <= 999:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(year * 10 + 7))
              );
            default:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(7))
              );
          }
        }
        return null;
      case '8':
        if (datePortion === 'DD') {
          const date = currentDate.getDate();
          setInputSelectPosition(selectStart + 3);
          switch (true) {
            case date <= 2: {
              return setCurrentDate(
                new Date(new Date(currentDate).setDate(date * 10 + 8))
              );
            }
            case lastKeyPress === '3': {
              const month = currentDate.getMonth() + 1;
              const year = currentDate.getFullYear();
              const daysInMonth = getNumberOfDaysInMonth(year, month);
              setInputSelectPosition(selectStart + 3);

              return setCurrentDate(
                new Date(new Date(currentDate).setDate(daysInMonth))
              );
            }
            default: {
              return setCurrentDate(new Date(new Date(currentDate).setDate(8)));
            }
          }
        }
        if (datePortion === 'MM') {
          setInputSelectPosition(selectStart + 3);
          return setCurrentDate(new Date(new Date(currentDate).setMonth(7)));
        }
        if (datePortion === 'YYYY') {
          const year = currentDate.getFullYear();
          switch (true) {
            case year <= 999:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(year * 10 + 8))
              );
            default:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(8))
              );
          }
        }
        return null;
      case '9':
        if (datePortion === 'DD') {
          const date = currentDate.getDate();
          setInputSelectPosition(selectStart + 3);
          switch (true) {
            case date <= 2: {
              return setCurrentDate(
                new Date(new Date(currentDate).setDate(date * 10 + 9))
              );
            }
            case lastKeyPress === '3': {
              const month = currentDate.getMonth() + 1;
              const year = currentDate.getFullYear();
              const daysInMonth = getNumberOfDaysInMonth(year, month);
              setInputSelectPosition(selectStart + 3);

              return setCurrentDate(
                new Date(new Date(currentDate).setDate(daysInMonth))
              );
            }
            default: {
              return setCurrentDate(new Date(new Date(currentDate).setDate(9)));
            }
          }
        }
        if (datePortion === 'MM') {
          setInputSelectPosition(selectStart + 3);
          return setCurrentDate(new Date(new Date(currentDate).setMonth(8)));
        }
        if (datePortion === 'YYYY') {
          const year = currentDate.getFullYear();
          switch (true) {
            case year <= 999:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(year * 10 + 9))
              );
            default:
              return setCurrentDate(
                new Date(new Date(currentDate).setFullYear(9))
              );
          }
        }
        return null;
      default:
        return null;
    }
  };

  const inputOnFocus = () => {
    setInputSelectPosition(0);
  };

  return (
    <input
      type="text"
      readOnly
      ref={dropdownInputRef}
      value={formatDate(currentDate)}
      onClick={inputOnClick}
      // onMouseUp={(e) => e.preventDefault()}
      onFocus={inputOnFocus}
      onKeyDown={inputOnKey}
      onMouseMove={(e) => e.preventDefault()} // Prevent highlighting
      onTouchMove={(e) => e.preventDefault()} // Prevent highlighting
    />
  );
}

export default InputDatePicker;
