/* eslint-disable unicorn/filename-case */
import { useEffect, useState } from 'react';
import ApiService from '../services/Services';

function useComments(request) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [comments, setComments] = useState();

  useEffect(() => {
    async function getAllRequests() {
      if (!request) return;

      setIsLoading(true);
      setIsError('');

      const responseData = await ApiService.getAllComments(request.id);
      if (responseData) {
        const { data, results } = responseData;
        setComments({ data, results });
      } else {
        setIsError('Failed to reach server');
      }
      setIsLoading(false);
    }

    getAllRequests();
  }, [request]);

  return [comments, isLoading, isError];
}

export default useComments;
