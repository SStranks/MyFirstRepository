import IconCalender from '#Svg/icon-calendar.svg';
import { useEffect, useRef, useState } from 'react';
import styles from './InputDate.module.scss';
import InputDateCalendar from './InputDateCalendar';
import InputDatePicker from './InputDatePicker';
import { formatDate, isValidDate } from './dateUtil';

const setInitialDate = (min: Date | undefined, max: Date | undefined) => {
  // Create date; remove time portion.
  let date = new Date();
  date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  if (min && date < min) date = min;
  if (max && date > max) date = max;
  return date;
};

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
  const [currentDate, setCurrentDate] = useState<Date>(
    setInitialDate(minDate, maxDate)
  );
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
          delimiter="/"
        />
        <button
          type="button"
          className={styles.dropdownSelect__iconBtn}
          onClick={() => setIsDropdownOpen((prev) => !prev)}>
          <img src={IconCalender} alt="" />
        </button>
      </div>
      {isDropdownOpen && (
        <div className={styles.dropdownPanel} ref={dropdownPanelRef}>
          <InputDateCalendar
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            setDropdownOpen={setIsDropdownOpen}
            min={minDate}
            max={maxDate}
          />
        </div>
      )}
    </div>
  );
}

export default DatePicker;
