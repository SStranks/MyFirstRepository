export default class ApiServiceClient {
  constructor(ApiClient) {
    this.ApiServiceClient = ApiClient;
  }

  async getAllRequests() {
    try {
      const response = await this.ApiServiceClient.get('/requests');
      const {
        data: { requests: responseData },
      } = response;
      return responseData;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async postRequest(body) {
    try {
      const response = await this.ApiServiceClient.post('/requests', body);
      const {
        data: { request: responseData },
      } = response;
      return responseData;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async patchRequest(requestId, body) {
    try {
      const response = await this.ApiServiceClient.patch(
        `requests/${requestId}`,
        body
      );
      const {
        data: { request: responseData },
      } = response;
      return responseData;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async patchRequestUpvote(requestId, userId) {
    try {
      const response = await this.ApiServiceClient.patch(
        `/requests/${requestId}/upvote?userId=${userId}`
      );
      const {
        data: { request: responseData },
      } = response;
      return responseData;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async deleteRequest(requestId) {
    try {
      const response = await this.ApiServiceClient.delete(
        `requests/${requestId}`
      );
      const { status: statusCode } = response;
      return statusCode;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async getAllComments(requestId) {
    try {
      const response = await this.ApiServiceClient.get(
        `/requests/comments/${requestId}`
      );
      const {
        data: { resComments: data },
        results,
      } = response;
      const responseData = { data, results };
      return responseData;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async postComment(requestId, commentId, body) {
    const URL = commentId
      ? `/comments?request=${requestId}&comment=${commentId}`
      : `/comments?request=${requestId}`;

    try {
      const response = await this.ApiServiceClient.post(URL, body);
      const {
        data: { comment: responseData },
      } = response;
      return responseData;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
