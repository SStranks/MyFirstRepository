import { useContext, useEffect, useRef, useState } from 'react';
import styles from './_InputText.module.scss';
import { FormContext } from './Form';

type TProps = {
  placeholder: string;
  initialValue: string;
  name: string;
  validationFn: (value: string) => boolean;
};

function InputText(props: TProps): JSX.Element {
  const { placeholder, initialValue, name, validationFn } = props;
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<boolean>(false);
  const { formDispatch, genId } = useContext(FormContext);
  const identity = useRef<number>(genId());

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setValue(e.currentTarget?.value);
  };

  const onBlurHandler = () => {
    formDispatch({
      type: 'updateInputValue',
      payload: {
        identity: identity.current,
        value,
      },
    });
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    formDispatch({
      type: 'registerInput',
      payload: {
        identity: identity.current,
        value,
        setValue,
        setError,
        validationFn,
      },
    });
  }, [formDispatch, validationFn, value]);

  return (
    <div
      className={`${styles.container} ${error && !value ? styles.error : ''}`}>
      <input
        type="text"
        className={styles.container__input}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
    </div>
  );
}

export default InputText;
