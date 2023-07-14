/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './_InputTextArea.module.scss';

function InputTextarea(props) {
  const {
    name,
    id,
    cols,
    rows,
    defaultValue,
    required,
    placeholder,
    onChangeCallback,
    maxLength,
  } = props;
  const [validationMessage, setValidationMessage] = useState();

  const onInvalid = (e) => {
    const { target } = e;
    setValidationMessage(target.validationMessage);
  };

  const onChange = (e) => {
    if (validationMessage) setValidationMessage();
    if (onChangeCallback) onChangeCallback(maxLength, e.target.value.length);
  };

  return (
    <div className={styles.container}>
      <label className={styles.container} htmlFor={id}>
        <textarea
          className={styles.textarea}
          name={name}
          id={id}
          cols={cols}
          rows={rows}
          maxLength={maxLength}
          defaultValue={defaultValue}
          required={required}
          placeholder={placeholder}
          onInvalid={onInvalid}
          onChange={onChange}
        />
        {!!validationMessage && (
          <div className={styles.error}>
            <p>{validationMessage}</p>
          </div>
        )}
      </label>
    </div>
  );
}

export default InputTextarea;
