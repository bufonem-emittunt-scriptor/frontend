import axios from 'axios';
import router from '@/router.js';

const api = axios.create({
  baseURL: 'https://<addr>.<domain>'
});

function handleError(error) {
  if (error.response.status === 404) {
    router.push('/error/nopage');
  }
}

api.interceptors.response.use(response => response,
  error => {
    handleError(error);
    return Promise.reject(error);
  }
);

export { api };
