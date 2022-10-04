import PropTypes from 'prop-types';
import styles from './_Button.module.scss';

function Button(props) {
  const { text, value, onClick, disabled, classList } = props;

  return (
    <button
      type="button"
      className={`${styles.btn} ${styles[classList[0]]} ${
        styles[classList[1]]
      }`}
      onClick={onClick}
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
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: PropTypes.string,
  value: undefined,
  disabled: PropTypes.bool,
  classList: PropTypes.arrayOf(PropTypes.string),
  onClick: undefined,
};

export default Button;
