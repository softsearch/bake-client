import React from 'react';
import PropTypes from 'prop-types';
import login from '../../../actions/loginActions';
import '../../../assets/styles/login.css';

const LoginComponent = ({ name, password, dispatch }) => (
  <div className="container login">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input
                  type="text"
                  id="inputEmail"
                  {...name}
                  className="form-control"
                  placeholder="username"
                  required
                />
                <label htmlFor="inputEmail">username</label>
              </div>

              <div className="form-label-group">
                <input type="password" {...password} id="inputPassword" className="form-control" placeholder="Password" required />
                <label htmlFor="inputPassword">Password</label>
              </div>

              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
              </div>
              <button
                onClick={
                    () => dispatch(login({ username: name.value, password: password.value })())}
                className="btn btn-lg btn-primary btn-block text-uppercase"
                type="button"
              >Sign in
              </button>
              <hr className="my-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

LoginComponent.propTypes = {
  name: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default LoginComponent;
