import ApiClient from './ApiHttp';
import ApiServiceClient from './ApiServiceClient';

const ApiService = new ApiServiceClient(new ApiClient());
export default ApiService;
