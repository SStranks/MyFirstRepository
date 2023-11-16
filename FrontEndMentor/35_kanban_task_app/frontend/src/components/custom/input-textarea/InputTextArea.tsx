import { TReturnData } from '#Types/types';
import { useEffect, useRef, useState } from 'react';
import styles from './_InputTextArea.module.scss';

type TProps = {
  placeholder: string;
  inputName: string;
  value: string;
  groupId: string | undefined;
  error: boolean;
  returnData: (arg: TReturnData) => void;
};

function TextArea(props: TProps): JSX.Element {
  const {
    placeholder,
    inputName,
    value = '',
    groupId,
    error,
    returnData,
  } = props;
  const [text, setText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      ref={containerRef}>
      <textarea
        name={inputName}
        className={styles.container__input}
        placeholder={placeholder}
        value={text}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default TextArea;
