import DefaultLayout from '#Layouts/DefaultLayout';
import { Route, Routes } from 'react-router-dom';
import InvoiceEdit from './invoices/invoice-edit/InvoiceEdit';
import Main from './main/Main';

function App(): JSX.Element {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/invoice/:id" element={<InvoiceEdit />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
