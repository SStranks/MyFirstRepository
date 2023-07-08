import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './_InputTextArea.module.scss';

function Textarea(props) {
  const { name, id, cols, rows, required } = props;
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

Textarea.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
  required: PropTypes.bool,
};

Textarea.defaultProps = {
  name: PropTypes.string,
  id: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
  required: PropTypes.bool,
};

export default Textarea;
