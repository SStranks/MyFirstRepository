import { IInvoice } from '#Services/ApiServiceClient';
import { PropsWithChildren } from 'react';
import FormInvoice from './FormInvoice';
import styles from './SidePanel.module.scss';

interface IProps {
  title: string;
  invoice?: IInvoice;
}

function SidePanel(props: PropsWithChildren<IProps>): JSX.Element {
  const { title, invoice, children } = props;

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <p>
          {title}
          {invoice && (
            <>
              <span className={styles.container__title__hash}> #</span>
              {invoice?.slug}
            </>
          )}
        </p>
      </div>
      <div className={styles.sidebar}>
        <FormInvoice invoice={invoice} />
        {children}
      </div>
    </div>
  );
}

export default SidePanel;
