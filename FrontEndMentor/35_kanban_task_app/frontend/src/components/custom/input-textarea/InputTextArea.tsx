import { useEffect, useRef, useState } from 'react';
import styles from './_InputTextArea.module.scss';

type stateObj = {
  title: { value: string; error: boolean };
  description: { value: string; error: boolean };
  status: { current: string; statusArr: string[] };
  subtasks: {
    value: string;
    error: boolean;
    key: number;
    name: string;
    listId: number;
  }[];
};

type ElemProps = {
  name: string;
  placeholder: string;
  value: string | undefined;
  error: boolean;
  setFormData: React.Dispatch<React.SetStateAction<stateObj>>;
};

function TextArea(props: ElemProps): JSX.Element {
  const { name, placeholder, value = '', error, setFormData } = props;
  const [text, setText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    return setText(e.currentTarget?.value);
  };

  const onBlurHandler = () => {
    setFormData((prev) => ({
      ...prev,
      description: { ...prev.description, value: text },
    }));
  };

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <div
      className={`${styles.container} ${error && !text ? styles.error : ''}`}
      ref={containerRef}>
      <textarea
        name={name}
        className={styles.container__input}
        placeholder={placeholder}
        value={text}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        // id=""
        // cols="30"
        // rows="10"
      />
    </div>
  );
}

export default TextArea;
