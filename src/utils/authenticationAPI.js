import instance from './api';
import store from '../store/index';

const config = {
  endpoint: 'auth/api-token-auth/',
  method: 'POST',
  data: null,
  authenticated: store.getState().loginReducer.authenticated
};

class Authentication {
  static login({ username, password }) {
    config.data = { username, password };

    return instance(config).then(response => response).catch(err => err);
  }
}

export default Authentication;
