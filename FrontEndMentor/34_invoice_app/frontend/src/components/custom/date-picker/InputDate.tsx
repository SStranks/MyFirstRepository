import IconCalender from '#Svg/icon-calendar.svg';
import { useEffect, useRef, useState } from 'react';
import styles from './InputDate.module.scss';
import InputDateCalendar from './InputDateCalendar';
import InputDatePicker from './InputDatePicker';
import { formatDate, isValidDate } from './dateUtil';

const setInitialDate = (
  initialDate: string | undefined,
  min: Date | undefined,
  max: Date | undefined
) => {
  // Create date; remove time portion.
  let date = initialDate ? new Date(initialDate) : new Date();
  date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  if (min && date < min) date = min;
  if (max && date > max) date = max;
  return date;
};

const validatePropDate = (date: Date | undefined): Date | undefined => {
  if (date === undefined) return date;
  // Remove time component if present
  const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  // Check validity of date
  const formattedDate = formatDate(newDate);
  const isDateValid = isValidDate(formattedDate);
  if (!isDateValid) {
    console.error(date, formattedDate);
    throw new Error('Invalid Date');
  }
  return newDate;
};

// Expect format: new Date('January 01, 1999') to avoid 0 based errors.
interface IProps {
  initialDate?: string;
  min?: Date;
  max?: Date;
  labelId?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

// NOTE:  Improved keyboard accessibility; if the user increments the month/year, and the day is invalid (too high) then it automatically reduces the day to the largest valid value for that month.
function DatePicker(props: IProps): JSX.Element {
  const { initialDate, min, max, labelId, name, disabled, required } = props;
  const { current: minDate } = useRef(validatePropDate(min));
  const { current: maxDate } = useRef(validatePropDate(max));
  const [currentDate, setCurrentDate] = useState<Date>(
    setInitialDate(initialDate, minDate, maxDate)
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);

  // Click and Keyboard Event Handlers
  useEffect(() => {
    // Handle clicks outside of component; close dropdown
    const container = dropdownContainerRef.current;
    const clickHandler = (e: MouseEvent) => {
      if (
        isDropdownOpen &&
        e.target !== dropdownPanelRef.current &&
        !container?.contains(e.target as HTMLElement)
      ) {
        e.preventDefault();
        setIsDropdownOpen(false);
      }
    };

    // Handle keyboard event; spacebar to open dropdown
    const keyHandler = (e: KeyboardEvent) => {
      switch (e.key) {
        case ' ':
          setIsDropdownOpen(true);
          break;
        case 'Escape':
        case 'Esc':
          setIsDropdownOpen(false);
          dropdownButtonRef.current?.focus();
          break;
        default:
      }
    };
    container?.addEventListener('keydown', keyHandler);

    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
      container?.removeEventListener('keydown', keyHandler);
    };
  }, [isDropdownOpen]);

  return (
    <div className={styles.container} ref={dropdownContainerRef}>
      <div className={styles.dropdownSelect}>
        <input
          type="hidden"
          required={required}
          name={name ?? 'inputDate'}
          value={formatDate(currentDate)}
          pattern="\d{2}-\d{2}-\d{4}"
        />
        <InputDatePicker
          min={minDate}
          max={maxDate}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          delimiter="/"
          labelId={labelId}
          disabled={disabled}
        />
        <button
          type="button"
          className={styles.dropdownSelect__iconBtn}
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          ref={dropdownButtonRef}
          disabled={disabled}>
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
