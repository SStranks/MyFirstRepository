import PropTypes from 'prop-types';
import styles from './_Button.module.scss';

function Button(props) {
  const { text, value, disabled, classList } = props;

  return (
    <button
      type="button"
      className={`${styles.btn} ${styles[classList[0]]} ${
        styles[classList[1]]
      }`}
      value={value}
      disabled={disabled}>
      <p>{text}</p>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  classList: PropTypes.arrayOf(PropTypes.string),
};

Button.defaultProps = {
  text: PropTypes.string,
  value: undefined,
  disabled: PropTypes.bool,
  classList: PropTypes.arrayOf(PropTypes.string),
};

export default Button;
