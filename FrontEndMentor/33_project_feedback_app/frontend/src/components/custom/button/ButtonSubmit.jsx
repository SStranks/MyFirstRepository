/* eslint-disable react/prop-types */
import styles from './_Button.module.scss';

function ButtonSubmit(props) {
  const { text, value, disabled, classList } = props;

  return (
    <button
      type="submit"
      className={`${styles.btn} ${styles[classList[0]]} ${
        styles[classList[1]]
      }`}
      value={value}
      disabled={disabled}>
      <p>{text}</p>
    </button>
  );
}

export default ButtonSubmit;
