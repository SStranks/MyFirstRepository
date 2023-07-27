/* eslint-disable unicorn/filename-case */
import { useQuery } from '@tanstack/react-query';
import ApiService from '../services/Services';

async function getAllInvoices() {
  const responseData = await ApiService.getAllInvoices();
  return responseData;
}

function useInvoices() {
  const {
    isLoading,
    isError,
    data: invoices,
  } = useQuery({
    queryKey: ['invoices'],
    queryFn: getAllInvoices,
  });

  return [invoices, isLoading, isError] as const;
}

export default useInvoices;
