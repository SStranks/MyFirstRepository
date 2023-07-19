/* eslint-disable unicorn/filename-case */
import { useEffect, useState } from 'react';
import ApiService from '../services/Services';

function useRequests() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [requests, setRequests] = useState();

  useEffect(() => {
    async function getAllRequests() {
      setIsLoading(true);
      setIsError('');
      const responseData = await ApiService.getAllRequests();
      if (responseData) {
        setRequests(responseData);
      } else {
        setIsError('Failed to reach server');
      }
      setIsLoading(false);
    }

    getAllRequests();
  }, []);

  return [requests, isLoading, isError];
}

export default useRequests;
