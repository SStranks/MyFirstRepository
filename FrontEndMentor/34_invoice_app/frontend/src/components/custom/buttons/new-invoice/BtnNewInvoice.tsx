import IconPlus from '#Svg/icon-plus.svg';
import styles from './BtnNewInvoice.module.scss';

type BtnProps = {
  onClick: () => void;
  value: string | undefined;
  disabled: boolean | undefined;
};

function BtnNewInvoice(props: BtnProps): JSX.Element {
  const { onClick, value, disabled } = props;

  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      value={value}
      disabled={disabled}>
      <div className={styles.button__icon}>
        <img src={IconPlus} alt="" />
      </div>
      <p>New Invoice</p>
    </button>
  );
}

export default BtnNewInvoice;
