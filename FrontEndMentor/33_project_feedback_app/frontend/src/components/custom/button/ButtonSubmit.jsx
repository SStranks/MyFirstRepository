import PropTypes from 'prop-types';
import styles from './_Button.module.scss';

function ButtonSubmit(props) {
  const { text, value, disabled, classList } = props;

  const classes = classList.map((el) => `styles['${el}']`).join(' ');
  console.log(classList, classes);

  return (
    <button
      type="submit"
      className={`${styles.btn} ${classes}`}
      value={value}
      disabled={disabled}>
      <span>{text}</span>
    </button>
  );
}

ButtonSubmit.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  classList: PropTypes.arrayOf(PropTypes.string),
};

ButtonSubmit.defaultProps = {
  text: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  classList: PropTypes.arrayOf(PropTypes.string),
};

export default ButtonSubmit;
