import { useEffect, useRef, useState } from 'react';
import styles from './_InputText.module.scss';

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
  value: string;
  error: boolean;
  setFormData: React.Dispatch<React.SetStateAction<stateObj>>;
};

function InputText(props: ElemProps): JSX.Element {
  const { name, placeholder, value, error, setFormData } = props;
  const [text, setText] = useState('');
  const element = useRef<HTMLDivElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setText(e.currentTarget?.value);
  };

  const onBlurHandler = () => {
    setFormData((prev) => ({
      ...prev,
      title: { ...prev.title, value: text },
    }));
  };

  useEffect(() => {
    setText(value);
  }, [value]);

  // console.log(error, formError);

  return (
    <div
      className={`${styles.container} ${error && !text ? styles.error : ''}`}
      ref={element}>
      <input
        type="text"
        className={styles.container__input}
        name={name}
        placeholder={placeholder}
        value={text}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
    </div>
  );
}

export default InputText;
