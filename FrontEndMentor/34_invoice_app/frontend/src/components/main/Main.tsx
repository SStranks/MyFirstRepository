import InvoiceList from '#Components/invoices/invoice-list/InvoiceList';
import UtilityBar from '#Components/invoices/utilitybar/UtilityBar';
import ContentLayout from '#Layouts/ContentLayout';
import { IInvoice } from '#Services/ApiServiceClient';

interface IProps {
  invoices: IInvoice[] | undefined;
}

function Main(props: IProps): JSX.Element {
  const { invoices } = props;

  return (
    <ContentLayout>
      <UtilityBar numberInvoicesTotal={invoices?.length || 0} />
      <InvoiceList invoices={invoices} />
    </ContentLayout>
  );
}

export default Main;
