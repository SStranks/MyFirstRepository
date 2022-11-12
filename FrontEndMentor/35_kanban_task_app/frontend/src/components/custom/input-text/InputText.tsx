import { useEffect, useRef, useState } from 'react';
import styles from './_InputText.module.scss';

type ElemProps = {
  name: string;
  placeholder: string;
  formError: boolean;
  setFormError: React.Dispatch<React.SetStateAction<boolean>>;
};

function InputText(props: ElemProps): JSX.Element {
  const { name, placeholder, formError, setFormError } = props;
  const [text, setText] = useState('');
  const [error, setError] = useState<boolean | undefined>();
  const element = useRef<HTMLDivElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false);
      setFormError(false);
    }
    return setText(e.currentTarget?.value);
  };

  useEffect(() => {
    setError(formError);
  }, [formError]);

  // console.log(error, formError);

  return (
    <div
      className={`${styles.container} ${error && !text ? styles.error : ''}`}
      ref={element}>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className={styles.container__input}
        value={text}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default InputText;
