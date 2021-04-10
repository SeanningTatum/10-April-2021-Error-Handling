import axios from 'axios';

// const DEFAULT_HEADERS: Record<string, string> = {
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// };

const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  // headers: DEFAULT_HEADERS,
});

axios.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.data) {
      const { code } = error.response.data;
    }

    return Promise.reject(error);
  },
);

export default instance;
