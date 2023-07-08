import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './_InputText.module.scss';

function InputText(props) {
  const { id, name, required } = props;
  const [validationMessage, setValidationMessage] = useState();

  const onInvalid = (e) => {
    const { target } = e;
    setValidationMessage(target.validationMessage);
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
  );
}

InputText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
};

InputText.defaultProps = {
  id: undefined,
  name: undefined,
  required: undefined,
};

export default InputText;
