/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './_InputText.module.scss';

function InputText(props) {
  const { id, name, value, required } = props;
  const [validationMessage, setValidationMessage] = useState();

  const onInvalid = (e) => {
    const { target } = e;
    setValidationMessage(target.validationMessage);
  };

  const onBlur = () => {
    if (validationMessage) setValidationMessage();
  };

  const onChange = () => {
    if (validationMessage) setValidationMessage();
  };

  return (
    <label className={styles.container} htmlFor={id}>
      <input
        className={styles.input}
        type="text"
        id={id}
        name={name}
        defaultValue={value}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        onInvalid={onInvalid}
      />
      {!!validationMessage && (
        <div className={styles.error}>
          <p>{validationMessage}</p>
        </div>
      )}
    </label>
  );
}

export default InputText;
