/* eslint-disable unicorn/filename-case */
import { useEffect, useState } from 'react';

function useInvoices() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [invoices, setInvoices] = useState();

  useEffect(() => {
    async function getAllInvoices() {
      try {
        setIsLoading(true);
        setIsError('');

        const res = await fetch(`${process.env.API_HOST}/api/v1/requests`);

        if (!res.ok) throw new Error('Error fetching invoice data');

        const {
          data: { data },
        } = await res.json();
        setInvoices(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getAllInvoices();
  }, []);

  return [invoices, isLoading, isError];
}

export default useInvoices;
