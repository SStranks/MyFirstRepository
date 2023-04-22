import styles from './_InputText.module.scss';

type ElemProps = {
  appendClass: string;
  inputName: string;
  inputPlaceholder: string;
};

function InputText(props: ElemProps): JSX.Element {
  const { appendClass, inputName, inputPlaceholder } = props;

  return (
    <label className={`${styles.container} ${appendClass}`} htmlFor={inputName}>
      <p className={styles.container__title}>{inputName}</p>
      <input
        className={styles.container__input}
        type="text"
        placeholder={inputPlaceholder}
        id={inputName}
      />
    </label>
  );
}

export default InputText;
