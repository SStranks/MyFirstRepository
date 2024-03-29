import IconDown from '#Svg/icon-chevron-down.svg';
import { TReturnData } from '#Types/types';
import { useEffect, useRef } from 'react';
import styles from './_Dropdown.module.scss';

type TProps = {
  name: string;
  currentListItem: string;
  listItems: string[][];
  returnData: (data: TReturnData) => void;
};

function Dropdown(props: TProps): JSX.Element {
  const { name, currentListItem, listItems, returnData } = props;
  const dropdownContainer = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // DEBUG:  Modal has same keypress (Esc); it will fire modal one too if same key - is there a way to focus perhaps?
    // const keyPressHandler = (e: KeyboardEvent) =>
    //   (e.key === 'Escape' || e.key === 'Esc') &&
    //   listRef.current?.classList.add('hidden');

    const clickHandler = (e: MouseEvent) => {
      if (
        e.target !== listRef.current &&
        !dropdownContainer.current?.contains(e.target as HTMLElement)
      ) {
        listRef.current?.classList.add('hidden');
      }
    };

    document?.addEventListener('click', clickHandler);
    // document?.addEventListener('keyup', keyPressHandler);
    return () => {
      document?.addEventListener('click', clickHandler);
      // document.removeEventListener('keyup', keyPressHandler);
    };
  }, []);

  const dropdownClickHandler = () => {
    if (listRef.current) {
      listRef.current.classList.toggle('hidden');
    }
  };

  const listItemClickHandler = (e: React.MouseEvent) => {
    dropdownClickHandler();
    returnData({
      inputName: 'input-status',
      value: (e.target as HTMLButtonElement).value,
      columnId: (e.target as HTMLButtonElement).dataset.columnId,
    });
  };

  const listElems = listItems.map(([item, id], i) => (
    <button
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      type="button"
      value={item}
      className={styles.list__item}
      onClick={listItemClickHandler}
      data-column-id={id}>
      {item}
    </button>
  ));

  return (
    <div className={styles.dropdown} ref={dropdownContainer}>
      <input
        type="text"
        value={currentListItem}
        name={name}
        className={styles.dropdown__input}
        readOnly
      />
      <button
        type="button"
        className={styles.dropdown__button}
        onClick={dropdownClickHandler}>
        {currentListItem}
        <img src={IconDown} alt="" />
      </button>
      <div className={`${styles.list} hidden`} ref={listRef}>
        {listElems}
      </div>
    </div>
  );
}

export default Dropdown;
