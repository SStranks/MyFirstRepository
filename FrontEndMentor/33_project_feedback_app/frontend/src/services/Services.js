import ApiClient from './ApiHttp';
import ApiServiceClient from './ApiServiceClient';

const apiService = new ApiServiceClient(new ApiClient());
export default apiService;
