import { IInvoice } from '#Services/ApiServiceClient';
import ApiService from '#Services/Services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from './Modal';
import styles from './ModalDeleteInvoice.module.scss';

async function deleteInvoice(invoiceId: string) {
  const responseData = await ApiService.deleteInvoice(invoiceId);
  if (responseData !== 204) throw new Error('Unable to update invoice');
  return responseData;
}

interface IProps {
  invoice: IInvoice;
}

function ModalDeleteInvoice(props: IProps): JSX.Element | null {
  const { invoice } = props;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutateAsync: mutateAsyncDeleteInvoice } = useMutation({
    mutationFn: deleteInvoice,
  });
  const contextValue = useContext(ModalContext);

  if (!contextValue) return null;

  const deleteInvoiceBtnClickHandler = () => {
    toast.promise(mutateAsyncDeleteInvoice(invoice.id), {
      loading: 'Deleting Invoice',
      success: () => {
        queryClient.removeQueries({ queryKey: [invoice.id] });
        queryClient.invalidateQueries({ queryKey: ['invoices'] });
        navigate('/');
        return 'Invoice Deleted';
      },
      error: (error) => `${error.message}`,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__card}>
        <p className={styles.container__card__title}>Confirm Deletion</p>
        <p className={styles.container__card__message}>
          Are you sure you want to delete invoice {invoice.slug}? This action
          cannot be undone.
        </p>
        <div className={styles.container__card__buttons}>
          <div className={styles.container__cancelBtn}>
            <button
              type="button"
              onClick={() => contextValue.setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
          <div className={styles.container__deleteBtn}>
            <button type="button" onClick={deleteInvoiceBtnClickHandler}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDeleteInvoice;
