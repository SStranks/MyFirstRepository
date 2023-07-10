/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './_InputTextArea.module.scss';

function Textarea(props) {
  const { name, id, cols, rows, defaultValue, required } = props;
  const [validationMessage, setValidationMessage] = useState();

  const onInvalid = (e) => {
    const { target } = e;
    setValidationMessage(target.validationMessage);
  };

  const onChange = () => {
    if (validationMessage) setValidationMessage();
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
          defaultValue={defaultValue}
          required={required}
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

export default Textarea;
