import IconCalender from '#Svg/icon-calendar.svg';
import { useEffect, useRef, useState } from 'react';
import styles from './InputDate.module.scss';
import InputDateCalendar from './InputDateCalendar';
import InputDatePicker from './InputDatePicker';
import { formatDate, isValidDate } from './dateUtil';
// import DropdownContainer from './DropdownContainer';

// DEBUG:  onMouseDown - can't get selectionStart (caret not yet placed). The default date input automatically highlights the appropriate mm/dd/yyyy portion onMouseDown (not onClick).
// DEBUG:  similar to above; when clicking on input in blur state it needs to select where the cursor is.
// DEBUG:  tabbing through input: need to have focus shift immediately to next focusable input. This could be done by changing the date to three seperate inputs and letting the browser handle the tab process.

const TODAY_DATE = new Date();

// REFACTOR:  Too many responsibilities.
const validatePropDate = (date: Date | undefined): Date | undefined => {
  if (date === undefined) return date;
  const formattedDate = formatDate(date);
  const isDateValid = isValidDate(formattedDate);
  if (!isDateValid) {
    console.error(date, formattedDate);
    throw new Error('Invalid Date');
  }
  return date;
};

// Expect format: new Date('January 01, 1999') to avoid 0 based errors.
interface IProps {
  min?: Date;
  max?: Date;
  required?: boolean;
}

// NOTE:  Improved keyboard accessibility; if the user increments the month/year, and the day is invalid (too high) then it automatically reduces the day to the largest valid value for that month.
function DatePicker(props: IProps): JSX.Element {
  const { min, max, required } = props;
  const { current: minDate } = useRef(validatePropDate(min));
  const { current: maxDate } = useRef(validatePropDate(max));
  const [currentDate, setCurrentDate] = useState<Date>(TODAY_DATE);
  if (Math.random() === 0.3234)
    console.log(minDate, maxDate, currentDate, setCurrentDate);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);

  // Click and Keyboard Event Handlers
  useEffect(() => {
    // Handle clicks outside of component; close dropdown
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

    // Handle keyboard event; spacebar to open dropdown
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === ' ') setIsDropdownOpen(true);
      if (e.key === 'Escape') setIsDropdownOpen(false);
    };
    container?.addEventListener('keydown', keyHandler);

    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
      container?.removeEventListener('keydown', keyHandler);
    };
  }, []);

  return (
    <div className={styles.container} ref={dropdownContainerRef}>
      <div className={styles.dropdownSelect}>
        {/* // TODO:  Use this hidden input for form submission validation */}
        <input
          type="hidden"
          required={required}
          value={formatDate(currentDate)}
          pattern="\d{2}-\d{2}-\d{4}"
        />
        <InputDatePicker
          min={minDate}
          max={maxDate}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
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
        <InputDateCalendar
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          setDropdownOpen={setIsDropdownOpen}
        />
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
