import * as Actions from './actions';
import Authentication from '../api/authenticationAPI';

const loginSuccess = payload => ({
  type: Actions.LOGIN_SUCCESS,
  payload
});

const loginFailure = payload => ({
  type: Actions.LOGIN_FAILURE,
  payload
});

const login = user => (dispatch) => {
  Authentication.login(user)
    .then(() => {
      dispatch(loginSuccess());
    })
    .catch(() => {
      dispatch(loginFailure());
    });
};

export default login;
