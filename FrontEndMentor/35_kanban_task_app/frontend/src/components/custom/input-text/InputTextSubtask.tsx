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

type ReturnData = {
  inputName: string;
  value: string;
  groupId?: string;
};

type ElemProps = {
  inputName: string;
  value: string;
  groupId: string;
  error: boolean;
  deleteInput: (arg: ReturnData) => void;
  returnData: (arg: ReturnData) => void;
};

function InputTextSubtask(props: ElemProps): JSX.Element {
  const { inputName, value, groupId, error, deleteInput, returnData } = props;
  const [text, setText] = useState('');
  const subtaskRef = useRef<HTMLDivElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setText(e.currentTarget?.value);
  };

  const onBlurHandler = () => {
    returnData({ inputName, value: text, groupId });
  };

  useEffect(() => {
    setText(value);
  }, [value]);

  const deleteClickHandler = () => {
    deleteInput({ inputName, value: text, groupId });
  };

  return (
    <div
      className={`${styles['sub-task']} ${error && !text ? styles.error : ''}`}
      ref={subtaskRef}>
      <div className={styles['sub-task__container']}>
        <input
          type="text"
          className={styles['sub-task__input']}
          name={inputName}
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
