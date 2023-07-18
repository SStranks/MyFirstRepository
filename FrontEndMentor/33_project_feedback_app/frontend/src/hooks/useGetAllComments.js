/* eslint-disable unicorn/filename-case */
import { useEffect, useState } from 'react';
import ApiClient from '../services/ApiHttp';

const API = new ApiClient();

function useComments(requestId) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [comments, setComments] = useState();

  useEffect(() => {
    async function getAllRequests() {
      if (!requestId) return;
      try {
        setIsLoading(true);
        setIsError('');

        const res = await API.get(`/requests/comments/${requestId}`);
        const {
          results,
          data: { resComments },
        } = res;

        setComments({ resComments, results });
      } catch (error) {
        console.log('HELP2');
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getAllRequests();
  }, [requestId]);

  return [comments, isLoading, isError];
}

export default useComments;
