import { useRef } from 'react';
import styles from './Dropdown.module.scss';
import useDropdown from './useDropdown';

interface IProps {
  optionsArray?: string[];
  namespace?: string;
  ariaLabel: string;
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
    ariaLabel,
  } = props;
  const selectContainerRef = useRef<HTMLDivElement>(null);
  const selectListRef = useRef<HTMLUListElement>(null);
  const {
    isDropdownOpen,
    setIsDropdownOpen,
    currentOption,
    setCurrentOption,
    highlightedIndex,
    setHighlightedIndex,
  } = useDropdown({ selectContainerRef, selectListRef, optionsArray });

  return (
    <div className={styles.selectContainer} ref={selectContainerRef}>
      <button
        className={styles.select}
        type="button"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        role="combobox"
        aria-activedescendant={`${namespace}_element_${currentOption}`}
        aria-autocomplete="none"
        aria-controls={`${namespace}_dropdown`}
        aria-expanded={isDropdownOpen}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
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
        {optionsArray.map((option, index) => {
          if (index === 0) return null;
          return (
            <li
              key={option}
              id={`${namespace}_element_${option}`}
              className={`${styles.selectList__option} ${
                option === currentOption ? styles.optionSelected : ''
              } ${index === highlightedIndex ? styles.optionHighlighted : ''}`}
              onFocus={() => setHighlightedIndex(index)}
              onMouseOver={() => setHighlightedIndex(index)}
              role="option"
              aria-selected={option === currentOption}>
              <label htmlFor={`${namespace}_radio_${index}`}>
                <input
                  type="radio"
                  id={`${namespace}_radio_${index}`}
                  name={`${namespace}_radio`}
                  value={option}
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
