import styles from './_InputText.module.scss';

type ElemProps = {
  appendClass: string;
  inputName: string;
  inputPlaceholder: string;
};

function InputText(props: ElemProps): JSX.Element {
  const { appendClass, inputName, inputPlaceholder } = props;

  return (
    <div className={`${styles.container} ${appendClass}`}>
      <p className={styles.container__title}>{inputName}</p>
      <input
        className={styles.container__input}
        type="text"
        placeholder={inputPlaceholder}
      />
    </div>
  );
}

export default InputText;
