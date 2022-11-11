import IconDown from '#Svg/icon-chevron-down.svg';
import { useEffect, useRef, useState } from 'react';
import styles from './_Dropdown.module.scss';

type ElemProps = {
  currentListItem: string;
  listItems: string[];
};

function Dropdown(props: ElemProps): JSX.Element {
  const { currentListItem, listItems } = props;
  const [currentItem, setCurrentItem] = useState(currentListItem);
  const dropdownContainer = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const keyPressHandler = (e: KeyboardEvent) =>
      (e.key === 'Escape' || e.key === 'Esc') &&
      listRef.current?.classList.add('hidden');

    const clickHandler = (e: MouseEvent) => {
      if (
        e.target !== listRef.current &&
        !dropdownContainer.current?.contains(e.target as HTMLElement)
      ) {
        listRef.current?.classList.add('hidden');
      }
    };

    document?.addEventListener('click', clickHandler);
    document?.addEventListener('keydown', keyPressHandler);
    return () => {
      document?.addEventListener('click', clickHandler);
      document.removeEventListener('keydown', keyPressHandler);
    };
  }, []);

  const dropdownClickHandler = () => {
    if (listRef.current) {
      listRef.current.classList.toggle('hidden');
    }
  };

  const listItemClickHandler = (e: React.MouseEvent) => {
    setCurrentItem((e.target as HTMLButtonElement).value);
    dropdownClickHandler();
  };

  const listElems = listItems.map((item, i) => (
    <button
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      type="button"
      value={item}
      className={styles.list__item}
      onClick={listItemClickHandler}>
      {item}
    </button>
  ));

  return (
    <div className={styles['dropdown-container']} ref={dropdownContainer}>
      <button
        type="button"
        className={styles.dropdown}
        onClick={dropdownClickHandler}>
        {currentItem}
        <img src={IconDown} alt="" />
      </button>
      <div className={`${styles.list} hidden`} ref={listRef}>
        {listElems}
      </div>
    </div>
  );
}

export default Dropdown;
