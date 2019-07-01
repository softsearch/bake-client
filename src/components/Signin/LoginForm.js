import React from 'react';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

const LoginComponent = ({
  name, password, login, errors
}) => (
  <div className="login">
    <div className="container ">
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
                    required="required"
                    {...name}
                    className={errors && errors.username ? 'form-control error' : 'form-control'}
                    placeholder="username"
                  />
                  {errors.username && (
                  <p className="is-danger">{errors.username}</p>
                  )}
                  <label htmlFor="inputEmail">username</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="password"
                    {...password}
                    id="inputPassword"
                    className={errors && errors.password ? 'form-control error' : 'form-control'}
                    placeholder="Password"
                  />
                  {errors.password && (
                  <p className="is-danger">{errors.password}</p>
                  )}
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                </div>
                <button
                  onClick={login}
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="button"
                >Sign in
                </button>
                <ToastContainer />
                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

LoginComponent.propTypes = {
  name: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};

export default LoginComponent;
