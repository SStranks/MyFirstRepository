import IconCross from '#Svg/icon-cross.svg';
import { useRef, useState } from 'react';
import styles from './_InputTextSubtask.module.scss';

const placeholderText = [
  'e.g. Make coffee',
  'e.g. Drink coffee and smile',
  'e.g. Think about coffee some more',
  'e.g. Go make another cup of coffee',
  'e.g. Schedule time to purchase more coffee',
  'e.g. Enjoy coffee and smile more',
];

type ElemProps = {
  listId: number;
  // eslint-disable-next-line no-unused-vars
  deleteFn: (listId: number) => void;
};

function InputTextSubtask(props: ElemProps): JSX.Element {
  const { listId, deleteFn } = props;
  const [inputText, setInputText] = useState('');
  const subtaskRef = useRef<HTMLDivElement>(null);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      subtaskRef.current?.classList.contains(styles.error) &&
      e.currentTarget.value !== ''
    )
      subtaskRef.current.classList.remove(styles.error);
    setInputText(e.currentTarget.value);
  };

  // This line is for error styles; reapply elsewhere; on formSubmit, validate.
  // if (!inputText) subtaskRef.current?.classList.add(styles.error);

  const deleteClickHandler = () => {
    deleteFn(listId);
  };

  return (
    <div className={styles['sub-task']} ref={subtaskRef}>
      <div className={styles['sub-task__container']}>
        <input
          type="text"
          className={styles['sub-task__input']}
          placeholder={placeholderText[listId % placeholderText.length]}
          value={inputText}
          onChange={inputChangeHandler}
        />
      </div>
      <button type="button" onClick={deleteClickHandler}>
        <img src={IconCross} alt="" className={styles.icon} />
      </button>
    </div>
  );
}

export default InputTextSubtask;
