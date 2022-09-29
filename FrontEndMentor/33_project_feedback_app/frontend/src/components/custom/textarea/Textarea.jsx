import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './_Textarea.module.scss';

function Textarea(props) {
  const { name, id, cols, rows, innerRef, formError, setFormError } = props;
  const [error, setError] = useState(false);

  useEffect(() => {
    if (formError.textarea && innerRef.current.value.length === 0)
      setError(true);
  }, [formError, innerRef]);

  const textInputHandler = (e) => {
    if (error && e.target.value.length > 0) {
      setError(false);
      setFormError((prev) => ({ ...prev, textarea: false }));
    }
  };

  return (
    <div className={`${error ? styles['textarea--error'] : ''}`}>
      <textarea
        className={`${styles.textarea} ${
          error ? styles['textarea--error'] : ''
        }`}
        onChange={textInputHandler}
        ref={innerRef}
        name={name}
        id={id}
        cols={cols}
        rows={rows}
      />
    </div>
  );
}

Textarea.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
  formError: PropTypes.shape(),
  setFormError: PropTypes.func,
  innerRef: PropTypes.shape(),
};

Textarea.defaultProps = {
  name: PropTypes.string,
  id: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
  formError: PropTypes.bool,
  setFormError: PropTypes.func,
  innerRef: undefined,
};

export default Textarea;
