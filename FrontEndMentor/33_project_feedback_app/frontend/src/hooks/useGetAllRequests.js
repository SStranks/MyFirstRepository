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
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState('');
  // const [requests, setRequests] = useState();
  const {
    isLoading,
    isError,
    data: requests,
  } = useQuery({
    queryKey: ['requests'],
    queryFn: getAllRequests,
  });

  // async function getAllRequests() {
  //   try {
  //     const responseData = await ApiService.getAllRequests();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   async function getAllRequests() {
  //     setIsLoading(true);
  //     setIsError('');
  //     const responseData = await ApiService.getAllRequests();
  //     if (responseData) {
  //       setRequests(responseData);
  //     } else {
  //       setIsError('Failed to reach server');
  //     }
  //     setIsLoading(false);
  //   }

  //   getAllRequests();
  // }, []);

  return [requests, isLoading, isError];
}

export default useRequests;
