import { memo } from 'react';
import styles from './_InputRadio.module.scss';

//   // TODO:  Set value attribute
interface ElemProps extends React.HTMLProps<HTMLInputElement> {
  appendClass?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputRadio = memo((props: ElemProps): JSX.Element => {
  const {
    appendClass,
    onChange,
    id,
    checked,
    defaultChecked,
    disabled,
    name,
    ref,
    required,
    tabIndex,
    title,
    value,
  } = props;

  return (
    <label className={`${styles.label} ${appendClass}`} htmlFor={id}>
      <input
        type="radio"
        className={styles.label__radioBtn}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        name={name}
        onChange={onChange}
        ref={ref}
        required={required}
        tabIndex={tabIndex}
        title={title}
        value={value}
      />
      <p className={styles.label__title}>{id}</p>
    </label>
  );
});

// For debugging
InputRadio.displayName = 'Radio Input';

export default InputRadio;
