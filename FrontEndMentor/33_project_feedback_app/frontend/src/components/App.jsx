import { Route, Routes } from 'react-router-dom';
import useInvoices from '../hooks/useGetAllInvoices';
import { Feedback, Home, Roadmap } from '../pages';

function App() {
  const [invoices, isLoading, error] = useInvoices();

  return (
    <Routes>
      <Route
        path="/"
        element={<Home invoices={invoices} isLoading={isLoading} />}
      />
      <Route path="/feedback" element={<Feedback invoices={invoices} />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  );
}

export default App;
