import Button from '#Components/custom/buttons/generic/Button';
import styles from './ModalConfirmDelete.module.scss';

type ButtonProps = {
  invoiceCode: string;
  modalStateHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

// NOTE: Temporary Dev
const btnFunc = () => console.log('Test button');

function ModalConfirmDelete(props: ButtonProps): JSX.Element {
  const { invoiceCode, modalStateHandler } = props;

  return (
    <div className={styles.container}>
      <div className={styles.container__card}>
        <p className={styles.container__card__title}>Confirm Deletion</p>
        <p>
          Are you sure you want to delete invoice {invoiceCode}? This action
          cannot be undone.
        </p>
        <div className={styles.container__card__buttons}>
          <Button
            text="Cancel"
            color="grey"
            onClick={() => modalStateHandler(false)}
            value="cancel"
            disabled={false}
          />
          <Button
            text="Delete"
            color="red"
            onClick={btnFunc}
            value="delete"
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmDelete;
