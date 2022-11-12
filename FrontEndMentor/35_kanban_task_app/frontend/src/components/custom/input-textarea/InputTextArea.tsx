import { useEffect, useRef, useState } from 'react';
import styles from './_InputTextArea.module.scss';

type ElemProps = {
  name: string;
  placeholder: string;
  formError: boolean;
  setFormError: React.Dispatch<React.SetStateAction<boolean>>;
};

function TextArea(props: ElemProps): JSX.Element {
  const { name, placeholder, formError, setFormError } = props;
  const [text, setText] = useState('');
  const [error, setError] = useState<boolean | undefined>();
  const containerRef = useRef<HTMLDivElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (error) {
      setError(false);
      setFormError(false);
    }
    setText(e.currentTarget?.value);
  };

  useEffect(() => {
    setError(formError);
  }, [formError]);

  return (
    <div
      className={`${styles.container} ${error && !text ? styles.error : ''}`}
      ref={containerRef}>
      <textarea
        name={name}
        // id=""
        // cols="30"
        // rows="10"
        className={styles.container__input}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={text}
      />
    </div>
  );
}

export default TextArea;
