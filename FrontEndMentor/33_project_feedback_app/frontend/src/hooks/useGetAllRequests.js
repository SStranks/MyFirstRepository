/* eslint-disable unicorn/filename-case */
import { useEffect, useState } from 'react';
import ApiService from '../services/Services';
// import ApiClient from '../services/ApiHttp';

// const API = new ApiClient();

function useRequests() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [requests, setRequests] = useState();

  useEffect(() => {
    async function getAllRequests() {
      try {
        setIsLoading(true);
        setIsError('');
        const data = await ApiService.getAllRequests();
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
