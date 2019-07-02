import * as Actions from '../actions/constants';
import Authentication from '../../utils/authenticationAPI';
import toast from '../../utils/toast';

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
    .then((res) => {
      toast.success('Login Successful');
      dispatch(loginSuccess());
    });
};

export default login;
