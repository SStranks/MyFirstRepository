import styles from './_InputRadio.module.scss';

type ElemProps = {
  appendClass: string;
  inputName: string;
  inputId: string;
  inputGroup: string;
};

function InputText(props: ElemProps): JSX.Element {
  const { appendClass, inputName, inputId, inputGroup } = props;

  // TODO:  Set value attribute

  return (
    <label className={`${styles.label} ${appendClass}`} htmlFor={inputId}>
      <input
        className={styles.label__radioBtn}
        type="radio"
        id={inputId}
        name={inputGroup}
        // value={inputId}
      />
      <p className={styles.label__title}>{inputName}</p>
    </label>
  );
}

export default InputText;
