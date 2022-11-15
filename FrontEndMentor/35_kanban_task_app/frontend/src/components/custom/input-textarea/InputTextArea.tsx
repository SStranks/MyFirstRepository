import { useEffect, useRef, useState } from 'react';
import styles from './_InputTextArea.module.scss';

type ElemProps<S> = {
  name: string;
  placeholder: string;
  value: string | undefined;
  error: boolean;
  setFormData: React.Dispatch<React.SetStateAction<S>>;
};

function TextArea<S extends Record<string, unknown>>(
  props: ElemProps<S>
): JSX.Element {
  const { name, placeholder, value = '', error, setFormData } = props;
  const [text, setText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    return setText(e.currentTarget?.value);
  };

  const onBlurHandler = () => {
    setFormData((prev) => ({
      ...prev,
      description: {
        ...(prev.description as Record<string, unknown>),
        value: text,
      },
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
      />
    </div>
  );
}

export default TextArea;
