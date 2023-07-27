import useInvoices from '#Hooks/useGetAllInvoices';
import DefaultLayout from '#Layouts/DefaultLayout';
import { Route, Routes } from 'react-router-dom';
import InvoiceEdit from './invoices/invoice-edit/InvoiceEdit';
import Main from './main/Main';

function App(): JSX.Element {
  const [invoices, isLoading, isError] = useInvoices();
  console.log(isLoading, isError);

  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Main invoices={invoices} />} />
        <Route path="/invoice/:id" element={<InvoiceEdit />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
