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

        const {
          data: {
            data: { data },
          },
        } = await API.get('/requests');

        setRequests(data);
      } catch (error) {
        console.log('HELP');
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
