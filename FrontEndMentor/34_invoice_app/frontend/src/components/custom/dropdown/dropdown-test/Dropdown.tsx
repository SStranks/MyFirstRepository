/* eslint-disable react/no-array-index-key */
import { useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.scss';

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
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState(optionsArray[0]);
  const selectContainerRef = useRef<HTMLDivElement>(null);
  const selectListRef = useRef<HTMLUListElement>(null);

  // Close dropdown if click outside component
  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent) => {
      if (
        e.target !== selectListRef.current &&
        !selectContainerRef.current?.contains(e.target as HTMLElement)
      ) {
        selectListRef.current?.classList.add(styles['selectList--hidden']);
        setIsDropdownOpen(false);
      }
    };

    document?.addEventListener('click', clickOutsideHandler);
    return () => document?.addEventListener('click', clickOutsideHandler);
  }, []);

  const listItemClickHandler = (e: React.MouseEvent) => {
    const divElementText = (e.target as HTMLDivElement).textContent;
    setIsDropdownOpen(false);
    setCurrentOption(divElementText as string);
  };

  console.log(isDropdownOpen, isFocus);

  // const selectKeyHandler = (e: React.KeyboardEvent) => {
  //   console.log(e.key);
  //   // NOTE: Use e.key
  //   if (e.code === 'Enter') setIsDropdownOpen((prev) => !prev);
  //   if (e.code === 'Escape') setIsDropdownOpen(false);
  // };

  const keydownHandler2 = () => {
    console.log('Key', setCurrentOption);
  };

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
        {optionsArray.map((string, i) => {
          if (i === 0) return null;
          return (
            <li
              key={i}
              className={`${styles.selectList__option} ${
                string === currentOption ? styles.selectCurrentlySelected : ''
              }`}
              onClick={listItemClickHandler}
              onKeyDown={keydownHandler2}
              role="option"
              aria-selected={string === currentOption}>
              {string}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
