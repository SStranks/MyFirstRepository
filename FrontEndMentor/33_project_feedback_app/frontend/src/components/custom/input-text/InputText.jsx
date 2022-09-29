import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './_InputText.module.scss';

function InputText(props) {
  const { id, name, formError, setFormError, innerRef } = props;
  const [error, setError] = useState(false);

  useEffect(() => {
    if (formError.inputtext1 && innerRef.current.value.length === 0)
      setError(true);
  }, [formError, innerRef]);

  const textInputHandler = (e) => {
    if (error && e.target.value.length > 0) {
      setError(false);
      setFormError((prev) => ({ ...prev, inputtext1: false }));
    }
  };

  return (
    <div className={`${error ? styles['input--error'] : ''}`}>
      <input
        className={`${styles.input} ${error ? styles['input--error'] : ''}`}
        onChange={textInputHandler}
        type="text"
        id={id}
        name={name}
        ref={innerRef}
      />
    </div>
  );
}

InputText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  formError: PropTypes.shape(),
  setFormError: PropTypes.func,
  innerRef: PropTypes.shape(),
};

InputText.defaultProps = {
  id: undefined,
  name: undefined,
  formError: undefined,
  setFormError: undefined,
  innerRef: undefined,
};

export default InputText;
