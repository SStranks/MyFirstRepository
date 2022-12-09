import { TReturnData } from '#Types/types';
import { useEffect, useRef, useState } from 'react';
import styles from './_InputText.module.scss';

type ElemProps = {
  placeholder: string;
  inputName: string;
  value: string;
  groupId: string | undefined;
  error: boolean;
  returnData: (arg: TReturnData) => void;
};

function InputText(props: ElemProps): JSX.Element {
  const { placeholder, inputName, value, groupId, error, returnData } = props;
  const [text, setText] = useState('');
  const element = useRef<HTMLDivElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setText(e.currentTarget?.value);
  };

  const onBlurHandler = () => {
    returnData({ inputName, value: text, groupId });
  };

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <div
      className={`${styles.container} ${error && !text ? styles.error : ''}`}
      ref={element}>
      <input
        type="text"
        className={styles.container__input}
        name={inputName}
        placeholder={placeholder}
        value={text}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
    </div>
  );
}

export default InputText;
