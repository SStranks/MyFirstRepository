import Button from '#Components/custom/buttons/generic/Button';
import { useContext } from 'react';
import { ModalContext } from './Modal';
import styles from './ModalConfirmDelete.module.scss';

interface IProps {
  invoiceCode: string;
}

// NOTE: Temporary Dev
const btnFunc = () => console.log('Test button');

function ModalConfirmDelete(props: IProps): JSX.Element | null {
  const { invoiceCode } = props;
  const setIsModalOpen = useContext(ModalContext);

  if (!setIsModalOpen) return null;

  return (
    <div className={styles.container}>
      <div className={styles.container__card}>
        <p className={styles.container__card__title}>Confirm Deletion</p>
        <p className={styles.container__card__message}>
          Are you sure you want to delete invoice {invoiceCode}? This action
          cannot be undone.
        </p>
        <div className={styles.container__card__buttons}>
          <div>
            <Button
              text="Cancel"
              color="grey"
              onClick={() => setIsModalOpen.setIsModalOpen(false)}
              value="cancel"
              disabled={false}
            />
          </div>
          <div>
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
    </div>
  );
}

export default ModalConfirmDelete;
