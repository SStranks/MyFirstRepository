/* eslint-disable unicorn/filename-case */
import { useEffect, useState } from 'react';

function useRequests() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [requests, setRequests] = useState();

  useEffect(() => {
    async function getAllRequests() {
      try {
        setIsLoading(true);
        setIsError('');

        const res = await fetch(`${process.env.API_HOST}/api/v1/requests`);

        if (!res.ok) throw new Error('Error fetching invoice data');

        const {
          data: { data },
        } = await res.json();
        setRequests(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getAllRequests();
  }, []);

  return [requests, isLoading, isError];
}

export default useRequests;
