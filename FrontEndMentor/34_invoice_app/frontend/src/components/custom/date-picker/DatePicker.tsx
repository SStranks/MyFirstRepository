import IconCalender from '#Svg/icon-calendar.svg';
import { useEffect, useRef, useState } from 'react';
import styles from './DatePicker.module.scss';
import { formatDate, isValidDate } from './dateUtil';
// import DropdownContainer from './DropdownContainer';

// DEBUG:  onMouseDown - can't get selectionStart (caret not yet placed). The default date input automatically highlights the appropriate mm/dd/yyyy portion onMouseDown (not onClick).
// DEBUG:  similar to above; when clicking on input in blur state it needs to select where the cursor is.
// DEBUG:  tabbing through input: need to have focus shift immediately to next focusable input.

const TODAY_DATE = new Date().toLocaleDateString('en-GB');

const validatePropDate = (date: Date | undefined) => {
  if (date === undefined) return date;
  const formattedDate = formatDate(date);
  const isDateValid = isValidDate(formattedDate);
  if (!isDateValid) throw new Error('Invalid Date');
  return formattedDate;
};

// Expect format: new Date('January 01, 1999') to avoid 0 based errors.
interface IProps {
  min?: Date;
  max?: Date;
}

function DatePicker(props: IProps): JSX.Element {
  const { min, max } = props;
  const { current: minDate } = useRef(validatePropDate(min));
  const { current: maxDate } = useRef(validatePropDate(max));
  const [currentDate, setCurrentDate] = useState(TODAY_DATE);
  console.log(minDate, maxDate, currentDate, setCurrentDate);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const dropdownInputRef = useRef<HTMLInputElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside of component; close dropdown
  useEffect(() => {
    const container = dropdownContainerRef.current;
    const clickHandler = (e: MouseEvent) => {
      if (
        e.target !== dropdownPanelRef.current &&
        !container?.contains(e.target as HTMLElement)
      ) {
        e.preventDefault();
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, []);

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const inputDatePortion = (inputSelectPosition: number) => {
    return inputSelectPosition === 0
      ? 'DD'
      : inputSelectPosition === 3
      ? 'MM'
      : 'YYYY';
  };

  // const incrementValue = (selectStart: number) => {
  //   const datePortion = inputDatePortion(selectStart);
  //   switch (datePortion) {
  //     case 'DD':
  //     case 'MM':
  //     case 'YYYY':
  //     default:
  //   }
  // };

  const inputSelection = (inputSelectPosition = 0) => {
    let selectStart = inputSelectPosition;
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

  const inputOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const input = e.target as HTMLInputElement;
    const selectStart = input.selectionStart || 0;
    inputSelection(selectStart);
  };

  const inputOnKey = (e: React.KeyboardEvent) => {
    e.preventDefault();
    const input = e.target as HTMLInputElement;
    const selectStart = input.selectionStart || 0;
    switch (e.key) {
      case 'Tab':
        if (e.shiftKey) {
          return inputDatePortion(selectStart) === 'DD'
            ? dropdownInputRef.current?.blur()
            : inputSelection(selectStart - 3);
        }
        return inputDatePortion(selectStart) === 'YYYY'
          ? dropdownInputRef.current?.blur()
          : inputSelection(selectStart + 3);
      case 'ArrowLeft':
        return inputSelection(selectStart - 3);
      case 'ArrowRight':
        return inputSelection(selectStart + 3);
      case 'ArrowUp':
        // TODO: .
        // incrementValue(selectStart);
        return null;
      case 'ArrowDown':
        // TODO: .
        return null;
      default:
        return null;
    }
  };

  const inputOnFocus = () => {
    inputSelection();
  };

  return (
    <div className={styles.container} ref={dropdownContainerRef}>
      <div className={styles.dropdownSelect}>
        <input
          type="text"
          readOnly
          ref={dropdownInputRef}
          value={currentDate}
          onClick={inputOnClick}
          // onMouseUp={(e) => e.preventDefault()}
          onFocus={inputOnFocus}
          onKeyDown={inputOnKey}
          onMouseMove={(e) => e.preventDefault()} // Prevent highlighting
          onTouchMove={(e) => e.preventDefault()} // Prevent highlighting
        />
        <button
          type="button"
          className={styles.dropdownSelect__iconBtn}
          onClick={() => setIsDropdownOpen((prev) => !prev)}>
          <img src={IconCalender} alt="" />
        </button>
      </div>
      <div
        className={`${styles.dropdownPanel} ${
          isDropdownOpen ? styles['dropdownPanel--active'] : ''
        }`}
        ref={dropdownPanelRef}>
        S
      </div>
    </div>
  );
}

export default DatePicker;

// NOTE:  Compound Component Version
// function DatePicker(): JSX.Element {
//   const currentDate = '21 Aug 2021';
//   const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

//   const onClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setIsDropdownOpen((prev) => !prev);
//   };

//   return (
//     <div className={styles.container}>
//       <button type="button" onClick={onClick}>
//         Click
//       </button>
//       <DropdownContainer
//         appendClass={styles.dropdown}
//         openDropdown={isDropdownOpen}>
//         <DropdownContainer.ButtonContainer>
//           <div className={styles.dropdown__button}>
//             <p>{currentDate}</p>
//             <img src={IconCalender} alt="" />
//           </div>
//         </DropdownContainer.ButtonContainer>
//         <DropdownContainer.PanelContainer>
//           <div className={styles.dropdown__panel}>
//             <p>Some Content</p>
//           </div>
//         </DropdownContainer.PanelContainer>
//       </DropdownContainer>
//     </div>
//   );
// }
