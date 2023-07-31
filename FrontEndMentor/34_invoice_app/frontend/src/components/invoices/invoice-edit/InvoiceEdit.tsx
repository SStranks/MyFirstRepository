import Status from '#Components/custom/buttons/status/Status';
import Modal from '#Components/modal_v2/Modal';
import ModalDeleteInvoice from '#Components/modal_v2/ModalDeleteInvoice';
import ModalEditInvoice from '#Components/modal_v2/ModalEditInvoice';
import ReactPortal from '#Components/modal_v2/ReactPortal';
import ContentLayout from '#Layouts/ContentLayout';
import ApiService from '#Services/Services';
import IconArrowLeft from '#Svg/icon-arrow-left.svg';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import styles from './InvoiceEdit.module.scss';

async function getInvoice(invoiceId: string) {
  const responseData = await ApiService.getInvoice(invoiceId);
  return responseData;
}

async function patchInvoiceStatus(invoiceId: string) {
  const responseData = await ApiService.patchInvoiceStatus(invoiceId);
  if (!responseData) throw new Error('Unable to update invoice');
  return responseData;
}

type TParams = {
  id: string;
};
function InvoiceEdit(): JSX.Element | null {
  const [isModalEditInvoiceOpen, setIsModalEditInvoiceOpen] = useState(false);
  const [isModalDeleteInvoiceOpen, setIsModalDeleteInvoiceOpen] =
    useState(false);
  const { id: invoiceId } = useParams() as TParams;
  const { data: invoice, isLoading } = useQuery({
    queryKey: [invoiceId],
    queryFn: () => getInvoice(invoiceId),
  });
  const queryClient = useQueryClient();
  const { mutateAsync: mutateAsyncPatchInvoiceStatus } = useMutation({
    mutationFn: patchInvoiceStatus,
  });

  // TODO:  Proper Loading and Error handling
  if (isLoading || !invoice) return null;

  const editBtnClickHandler = () => {
    setIsModalEditInvoiceOpen(true);
  };

  const deleteInvoiceBtnClickHandler = () => {
    setIsModalDeleteInvoiceOpen(true);
  };

  const markInvoicePaidBtnClickHandler = () => {
    toast.promise(mutateAsyncPatchInvoiceStatus(invoiceId), {
      loading: 'Updating Invoice Status',
      success: () => {
        queryClient.invalidateQueries({ queryKey: ['invoices'] });
        queryClient.invalidateQueries({ queryKey: [invoiceId] });
        return 'Invoice Status Updated';
      },
      error: (error) => `${error.message}`,
    });
  };

  // Invoice Items
  const invoiceItems = invoice?.items.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <p className={styles['container__invoice__payment__grid__name--black']}>
          {item.name}
        </p>
        <p className={styles.container__invoice__payment__grid__qty}>
          {item.quantity}
        </p>
        <p className={styles.container__invoice__payment__grid__price}>
          £ {item.price}
        </p>
        <p
          className={styles['container__invoice__payment__grid__total--black']}>
          £ {item.total}
        </p>
        <div className={styles.container__invoice__payment__grid__mobile}>
          <p className={styles.container__invoice__payment__grid__mobile__name}>
            {item.name}
          </p>
          <p
            className={styles.container__invoice__payment__grid__mobile__price}>
            £ {item.price}
          </p>
          <p
            className={styles.container__invoice__payment__grid__mobile__combo}>
            £ {item.total} x {item.price}
          </p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <ContentLayout>
        <div className={styles.container}>
          <div className={styles.container__back}>
            <img src={IconArrowLeft} alt="" />
            <Link to="/">
              <p>Go Back</p>
            </Link>
          </div>
          <div className={styles.container__statusBar}>
            <div className={styles.container__statusBar__status}>
              <p>Status</p>
              <Status status={invoice.status} />
            </div>
            <div className={styles.container__statusBar__buttons}>
              {/* // REFACTOR:  Buttons to regular buttons with styles in src/sass */}
              <div className={styles.container__statusBar__editBtn}>
                <button type="button" onClick={editBtnClickHandler}>
                  Edit
                </button>
              </div>
              <div className={styles.container__statusBar__deleteBtn}>
                <button type="button" onClick={deleteInvoiceBtnClickHandler}>
                  Delete
                </button>
              </div>
              <div className={styles.container__statusBar__markPaidBtn}>
                <button type="button" onClick={markInvoicePaidBtnClickHandler}>
                  Mark as Paid
                </button>
              </div>
            </div>
          </div>
          <div className={styles.container__invoice}>
            <div className={styles.container__invoice__identity}>
              <div className={styles.container__invoice__identity__code}>
                <p>
                  #
                  <span
                    className={
                      styles['container__invoice__identity__code--black']
                    }>
                    {invoice.slug}
                  </span>
                </p>
                <p>{invoice.description}</p>
              </div>
              <div className="">
                <p>
                  {invoice.senderAddress.street}
                  <br />
                  {invoice.senderAddress.city}
                  <br />
                  {invoice.senderAddress.postCode}
                  <br />
                  {invoice.senderAddress.country}
                </p>
              </div>
            </div>
            <div className={styles.container__invoice__details}>
              <div className={styles.container__invoice__details__date}>
                <p>Invoice Date</p>
                <p
                  className={
                    styles['container__invoice__details__date--black']
                  }>
                  {invoice.createdAt}
                </p>
              </div>
              <div className={styles.container__invoice__details__due}>
                <p>Payment Due</p>
                <p
                  className={styles['container__invoice__details__due--black']}>
                  {invoice.paymentDue}
                </p>
              </div>
              <div className={styles.container__invoice__details__recipient}>
                <p>Bill To</p>
                <p
                  className={
                    styles['container__invoice__details__recipient--black']
                  }>
                  {invoice.clientName}
                </p>
                <p>{invoice.clientAddress.street}</p>
                <p>{invoice.clientAddress.city}</p>
                <p>{invoice.clientAddress.postCode}</p>
                <p>{invoice.clientAddress.country}</p>
              </div>
              <div className={styles.container__invoice__details__email}>
                <p>Sent to</p>
                <p
                  className={
                    styles['container__invoice__details__email--black']
                  }>
                  {invoice.clientEmail}
                </p>
              </div>
            </div>
            <div className={styles.container__invoice__payment}>
              <div className={styles.container__invoice__payment__grid}>
                <p
                  className={`${styles.container__invoice__payment__grid__name} ${styles.container__invoice__payment__grid__title}`}>
                  Item Name
                </p>
                <p
                  className={`${styles.container__invoice__payment__grid__qty} ${styles.container__invoice__payment__grid__title}`}>
                  QTY.
                </p>
                <p
                  className={`${styles.container__invoice__payment__grid__price} ${styles.container__invoice__payment__grid__title}`}>
                  Price
                </p>
                <p
                  className={`${styles.container__invoice__payment__grid__total} ${styles.container__invoice__payment__grid__title}`}>
                  Total
                </p>
                {invoiceItems}
              </div>
              <div className={styles.container__invoice__payment__total}>
                <p className={styles.container__invoice__payment__total__due}>
                  Amount Due
                </p>
                <p className={styles.container__invoice__payment__total__total}>
                  £ {invoice.total}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
      <ReactPortal wrapperId="modal">
        <Modal
          isModalOpen={isModalDeleteInvoiceOpen}
          setIsModalOpen={setIsModalDeleteInvoiceOpen}>
          <ModalDeleteInvoice invoice={invoice} />
        </Modal>
        <Modal
          isModalOpen={isModalEditInvoiceOpen}
          setIsModalOpen={setIsModalEditInvoiceOpen}>
          <ModalEditInvoice invoice={invoice} />
        </Modal>
      </ReactPortal>
    </>
  );
}

export default InvoiceEdit;
