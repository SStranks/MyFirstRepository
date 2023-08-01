import { useEffect, useState } from 'react';
import styles from './Dropdown.module.scss';

interface IProps {
  optionsArray: string[];
  selectListRef: React.RefObject<HTMLUListElement>;
  selectContainerRef: React.RefObject<HTMLDivElement>;
}

function useDropdown(props: IProps) {
  const { optionsArray, selectListRef, selectContainerRef } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [currentOption, setCurrentOptionInternal] = useState(optionsArray[0]);

  const setCurrentOption = (option: string) => {
    setCurrentOptionInternal(option);
    setIsDropdownOpen(false);
  };

  console.log(isFocus);

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
  }, [selectContainerRef, selectListRef]);

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    setIsFocus,
    currentOption,
    setCurrentOption,
  };
}

export default useDropdown;
