import instance from './axiosConfig';

class Authentication {
  static login({ username, password }) {
    instance.post('api/auth/api-token-auth/', {
      username,
      password
    })
      .then((res) => {
        console.log(res);

        return res;
      })
      .catch(err => (err));
  }
}

export default Authentication;
