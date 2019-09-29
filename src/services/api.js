import axios from 'axios';
import router from '@/router.js';

const api = axios.create({
  baseURL: 'https://museer0007.herokuapp.com/'
});

function handleError(error) {
  // if (error.response.status === 404) {
  //   router.push('/error/nopage');
  // }
  // if (error.response.status === 401) {
  //   router.push('/');
  // }
  // if (error.response.status === 403) {
  //   router.push('/');
  // }
  // if (error.response.status === 500) {
  //   router.push('/error/server');
  // }
  // if (error.response.status === 503) {
  //   router.push('/error/server');
  // }
}
// 
// api.interceptors.response.use(response => response,
//   error => {
//     handleError(error);
//     return Promise.reject(error);
//   }
// );

export { api };
