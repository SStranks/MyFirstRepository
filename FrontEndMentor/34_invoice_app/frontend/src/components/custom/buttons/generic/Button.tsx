import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  color: string;
  onClick: () => void;
  value: string;
  disabled: boolean;
};

function Button(props: ButtonProps): JSX.Element {
  const { text, color, onClick, value, disabled } = props;

  return (
    <button
      type="button"
      className={styles[`container--${color}`]}
      onClick={onClick}
      value={value}
      disabled={disabled}>
      <p>{text}</p>
    </button>
  );
}

export default Button;
