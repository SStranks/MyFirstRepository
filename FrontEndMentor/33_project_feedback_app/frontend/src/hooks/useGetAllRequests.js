/* eslint-disable unicorn/filename-case */
import { useEffect, useState } from 'react';
import HttpAPI from '../services/httpAPI';

const API = new HttpAPI();

function useRequests() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [requests, setRequests] = useState();

  useEffect(() => {
    async function getAllRequests() {
      try {
        setIsLoading(true);
        setIsError('');

        const res = await API.get('/requests');
        const {
          data: { requests: resData },
        } = res;

        setRequests(resData);
      } catch (error) {
        console.log('HELP2');
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
