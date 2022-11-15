import { useEffect, useRef, useState } from 'react';
import styles from './_InputText.module.scss';

type ElemProps<S> = {
  name: string;
  placeholder: string;
  value: string;
  error: boolean;
  setFormData: React.Dispatch<React.SetStateAction<S>>;
};

function InputText<S extends Record<string, unknown>>(
  props: ElemProps<S>
): JSX.Element {
  const { name, placeholder, value, error, setFormData } = props;
  const [text, setText] = useState('');
  const element = useRef<HTMLDivElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setText(e.currentTarget?.value);
  };

  const onBlurHandler = () => {
    setFormData((prev) => ({
      ...prev,
      title: { ...(prev.title as Record<string, unknown>), value: text },
    }));
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
