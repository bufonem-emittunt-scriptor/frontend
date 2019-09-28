import { api } from 'api';
import router from '@/router';
import store from '@/store';

const refresh_token = () => localStorage.getItem('refresh_token');
const access_token = () => localStorage.getItem('access_token');

const new_refresh_token = (token) => localStorage.setItem('refresh_token', token);
const new_access_token = (token) => localStorage.setItem('access_token', token);

const delete_refresh_token = () => localStorage.removeItem('refresh_token');
const delete_access_token = () => localStorage.removeItem('access_token');

const TOKEN_TIME = 100; // seconds

function newPair({access, refresh}) {
  new_access_token(access);
  new_refresh_token(refresh);
}

function deletePair() {
  delete_access_token();
  delete_refresh_token();
}

function refreshToken() {
  api.post('path', {
    refresh: refresh_token()
  })
  .then(response => {
    newPair({
      access: response.data.access,
      refresh: response.data.refresh
    });
    store.commit('setAuth', true);
  })
  .catch(error => {
    router.push('/error/session');
    deletePair();
    store.commit('setAuth', false);
  });
}

function setRefresherer() {
  setInterval(refreshToken, TOKEN_TIME - 60);
}

function getFirstPair(body, error = () => {}, success = () => {}) {
  api.post('path', body)
  .then(response => {
    success();
    newPair({
      access: response.data.access,
      refresh: response.data.refresh
    });
    setRefresherer();
    store.commit('setAuth', true);
  })
  .catch(error => {
    error();
    deletePair();
    store.commit('setAuth', false);
  });
}

function tryToRestore() {
  api.post('path', {
    refresh: refresh_token()
  })
  .then(response => {
    newPair({
      access: response.data.access,
      refresh: response.data.refresh
    });
    store.commit('setAuth', true);
  })
  .catch(error => {
    router.push('/auth');
    deletePair();
    store.commit('setAuth', false);
  });
}

export {
  getFirstPair,
  refresh_token,
  access_token
};
