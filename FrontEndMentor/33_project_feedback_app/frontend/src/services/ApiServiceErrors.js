export default function handleServiceError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code that falls out of the range of 2xx
    const { headers, data, status } = error.response;
    if (data?.message) {
      console.error(data.message);
    }
    console.error(status);
    console.error(headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and instance of http.ClientRequest in node.js
    console.error(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error', error.message);
  }
}
