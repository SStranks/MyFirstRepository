export default class ApiServiceClient {
  constructor(ApiClient) {
    this.ApiServiceClient = ApiClient;
  }

  async getAllRequests() {
    try {
      const response = await this.ApiServiceClient.get('/requests');
      const {
        data: { requests: resData },
      } = response;
      return resData;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
