import InvoiceList from '#Components/invoices/invoice-list/InvoiceList';
import UtilityBar from '#Components/invoices/utilitybar/UtilityBar';
import ContentLayout from '#Layouts/ContentLayout';

function Main(): JSX.Element {
  return (
    <ContentLayout>
      <UtilityBar />
      <InvoiceList />
    </ContentLayout>
  );
}

export default Main;
