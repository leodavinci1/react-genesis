import axios from 'axios';

export default (endpoint = process.env.REACT_APP_BFF_RATINGS_URL) => {
  const instance = axios.create({
    baseURL: endpoint,
    timeout: 30000,
    maxRedirects: 0,
  });

  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response.status === 401) {
        console.log("error: Deu erro");
      }
      return Promise.reject(error);
    }
  );
  return instance;
};
