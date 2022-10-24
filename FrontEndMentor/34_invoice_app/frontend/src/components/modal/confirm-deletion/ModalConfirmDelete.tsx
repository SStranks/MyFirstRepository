import styles from './ModalConfirmDelete.module.scss';

type ButtonProps = {
  invoiceCode: string;
};

function ButtonModalConfirmDelete(props: ButtonProps): JSX.Element {
  const { invoiceCode } = props;

  return (
    <div className={styles.container}>
      <p className={styles.container__title}>Confirm Deletion</p>
      <p>
        Are you sure you want to delete invoice {invoiceCode}? This action
        cannot be undone.
      </p>
      <div className={styles.container__buttons}>
        {/* Button 1 */}
        {/* Button 2 */}
      </div>
    </div>
  );
}

export default ButtonModalConfirmDelete;
