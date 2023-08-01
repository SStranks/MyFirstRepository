/* eslint-disable react/no-array-index-key */
import { useRef } from 'react';
import styles from './Dropdown.module.scss';
import useDropdown from './useDropdown';

interface IProps {
  optionsArray?: string[];
  namespace?: string;
}

const defaultOptions = [
  'Select Option:',
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
];

function Dropdown(props: IProps): JSX.Element {
  const {
    optionsArray = defaultOptions,
    namespace = 'default_select_namespace',
  } = props;
  const selectContainerRef = useRef<HTMLDivElement>(null);
  const selectListRef = useRef<HTMLUListElement>(null);
  const {
    isDropdownOpen,
    setIsDropdownOpen,
    setIsFocus,
    currentOption,
    setCurrentOption,
  } = useDropdown({ selectContainerRef, selectListRef, optionsArray });

  return (
    <div className={styles.selectContainer} ref={selectContainerRef}>
      <select>
        {optionsArray.map((string, i) => {
          return (
            <option key={i} value={i}>
              {string}
            </option>
          );
        })}
      </select>
      <button
        className={styles.select}
        type="button"
        onClick={() => {
          setIsDropdownOpen(true);
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        role="combobox"
        aria-controls={`${namespace}_dropdown`}
        aria-expanded={isDropdownOpen}
        tabIndex={0}>
        {currentOption}
      </button>
      <ul
        className={`${styles.selectList} ${
          isDropdownOpen ? '' : styles['selectList--hidden']
        }`}
        id={`${namespace}_dropdown`}
        role="listbox"
        tabIndex={-1}
        ref={selectListRef}>
        {optionsArray.map((option, i) => {
          if (i === 0) return null;
          return (
            <li
              key={i}
              className={`${styles.selectList__option} ${
                option === currentOption ? styles.selectCurrentlySelected : ''
              }`}
              role="option"
              aria-selected={option === currentOption}>
              <label htmlFor={`${namespace}_radio_${i}`}>
                <input
                  type="radio"
                  id={`${namespace}_radio_${i}`}
                  name={`${namespace}_radio`}
                  value={option}
                  className={
                    option === currentOption
                      ? styles.selectCurrentlySelected
                      : ''
                  }
                  checked={option === currentOption}
                  onChange={() => setCurrentOption(option)}
                />
                <span>{option}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
