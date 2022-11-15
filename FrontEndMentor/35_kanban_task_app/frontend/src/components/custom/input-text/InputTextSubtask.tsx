import IconCross from '#Svg/icon-cross.svg';
import { useEffect, useRef, useState } from 'react';
import styles from './_InputTextSubtask.module.scss';

const placeholderText = [
  'e.g. Make coffee',
  'e.g. Drink coffee and smile',
  'e.g. Think about coffee some more',
  'e.g. Go make another cup of coffee',
  'e.g. Schedule time to purchase more coffee',
  'e.g. Enjoy coffee and smile more',
];

type ElemProps<S> = {
  name: string;
  value: string;
  error: boolean;
  setFormData: React.Dispatch<React.SetStateAction<S>>;
  listId?: number;
};

function InputTextSubtask<S extends Record<string, unknown>>(
  props: ElemProps<S>
): JSX.Element {
  const { name, value, error, setFormData, listId } = props;
  const [text, setText] = useState('');
  const subtaskRef = useRef<HTMLDivElement>(null);

  console.log('render');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setText(e.currentTarget?.value);
  };

  const onBlurHandler = () => {
    setFormData((prev) => ({
      ...prev,
      subtasks: [
        ...(prev.subtasks as Record<string, unknown>[]).map((task) => {
          if (task.listId === listId) return { ...task, value: text };
          return task;
        }),
      ],
    }));
  };

  useEffect(() => {
    setText(value);
  }, [value]);

  const deleteClickHandler = () => {
    setFormData((prev) => {
      const subtasks = (prev.subtasks as Record<string, unknown>[]).filter(
        (task) => task.listId !== listId
      );
      return { ...prev, subtasks: [...subtasks] };
    });
  };

  return (
    <div
      className={`${styles['sub-task']} ${error && !text ? styles.error : ''}`}
      ref={subtaskRef}>
      <div className={styles['sub-task__container']}>
        <input
          type="text"
          className={styles['sub-task__input']}
          name={name}
          placeholder={placeholderText[0]}
          // placeholder={placeholderText[listId % placeholderText.length]}
          value={text}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
      </div>
      <button type="button" onClick={deleteClickHandler}>
        <img src={IconCross} alt="" className={styles.icon} />
      </button>
    </div>
  );
}

export default InputTextSubtask;
