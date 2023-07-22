import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  // queryCache: {},
  // mutationCache: {},
  // logger: {},
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default queryClient;
