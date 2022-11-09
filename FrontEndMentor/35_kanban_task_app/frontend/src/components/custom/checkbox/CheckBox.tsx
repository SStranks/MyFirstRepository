import styles from './_CheckBox.module.scss';

type ElemProps = {
  title: string;
  checked: boolean;
};

function CheckBox(props: ElemProps): JSX.Element {
  const { title, checked } = props;

  return (
    <label htmlFor="custom-checkbox" className={styles['custom-checkbox']}>
      <input type="checkbox" id="custom-checkbox" checked={checked} />
      <span />
      <p>{title}</p>
    </label>
  );
}

export default CheckBox;
