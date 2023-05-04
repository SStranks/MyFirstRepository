import { memo } from 'react';
import styles from './_InputText.module.scss';

interface ElemProps extends React.HTMLProps<HTMLInputElement> {
  appendClass?: string;
}

const InputText = memo((props: ElemProps): JSX.Element => {
  const {
    appendClass,
    id,
    autoCapitalize,
    autoComplete,
    defaultValue,
    disabled,
    maxLength,
    minLength,
    name,
    pattern,
    placeholder,
    readOnly,
    required,
    tabIndex,
    title,
    value,
  } = props;

  return (
    <label className={`${styles.container} ${appendClass}`} htmlFor={id}>
      <p className={styles.container__title}>{id}</p>
      <input
        type="text"
        className={styles.container__input}
        id={id}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        disabled={disabled}
        minLength={minLength}
        maxLength={maxLength}
        name={name}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        tabIndex={tabIndex}
        title={title}
        value={value}
      />
    </label>
  );
});

// For debugging
InputText.displayName = 'Text Input';

export default InputText;
