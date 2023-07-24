/* eslint-disable unicorn/filename-case */
import { useQuery } from '@tanstack/react-query';
import ApiService from '../services/Services';

const getAllRequests = async function getAllRequests() {
  try {
    const responseData = await ApiService.getAllRequests();
    return responseData;
  } catch (error) {
    console.error(error);
    throw new Error('Could not fetch API data');
  }
};

function useRequests() {
  const {
    isLoading,
    isError,
    data: requests,
  } = useQuery({
    queryKey: ['requests'],
    queryFn: getAllRequests,
  });

  return [requests, isLoading, isError];
}

export default useRequests;
