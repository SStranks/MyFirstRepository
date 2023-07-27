import ButtonDeleteModal from '#Components/custom/buttons/delete-modal/ButtonDeleteModal';
import ButtonEditModal from '#Components/custom/buttons/edit-modal/ButtonEditModal';
import Button from '#Components/custom/buttons/generic/Button';
import Status from '#Components/custom/buttons/status/Status';
import ContentLayout from '#Layouts/ContentLayout';
import ApiService from '#Services/Services';
import IconArrowLeft from '#Svg/icon-arrow-left.svg';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './InvoiceEdit.module.scss';

// TEMP DEV: .
const btnFunc = () => console.log('Temp Btn Click');

async function getInvoice(invoiceId: string) {
  const responseData = await ApiService.getInvoice(invoiceId);
  return responseData;
}

type TParams = {
  id: string;
};

function InvoiceEdit(): JSX.Element | null {
  const { id: invoiceId } = useParams() as TParams;
  const { data: invoice, isLoading } = useQuery({
    queryKey: [invoiceId],
    queryFn: () => getInvoice(invoiceId),
  });

  // TODO:  Proper Loading and Error handling
  // eslint-disable-next-line unicorn/no-null
  if (isLoading || !invoice) return null;

  // Invoice Items
  const invoiceItems = invoice?.items.map((item) => {
    return (
      <React.Fragment key={invoice.id}>
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
            <ButtonEditModal
              text="Edit"
              color="grey"
              value="Edit"
              disabled={false}
            />
            <ButtonDeleteModal
              text="Delete"
              color="red"
              value="Delete"
              disabled={false}
            />
            <Button
              text="Mark as Paid"
              color="purple"
              onClick={btnFunc}
              value="Paid"
              disabled={false}
            />
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
              <p className={styles['container__invoice__details__date--black']}>
                {invoice.createdAt}
              </p>
            </div>
            <div className={styles.container__invoice__details__due}>
              <p>Payment Due</p>
              <p className={styles['container__invoice__details__due--black']}>
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
                className={styles['container__invoice__details__email--black']}>
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
  );
}

export default InvoiceEdit;
