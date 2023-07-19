/* eslint-disable unicorn/filename-case */
import { useEffect, useState } from 'react';
import ApiService from '../services/Services';

function useComments(requestId) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [comments, setComments] = useState();

  // const responseData = await ApiService.getAllRequests();
  // if (responseData) {
  //   setRequests(responseData);
  // } else {
  //   setIsError('Failed to reach server');
  // }

  useEffect(() => {
    async function getAllRequests() {
      if (!requestId) return;

      setIsLoading(true);
      setIsError('');

      const responseData = await ApiService.getAllComments(requestId);
      if (responseData) {
        const { data, results } = responseData;
        setComments({ data, results });
      } else {
        setIsError('Failed to reach server');
      }
      setIsLoading(false);
    }

    getAllRequests();
  }, [requestId]);

  return [comments, isLoading, isError];
}

export default useComments;
