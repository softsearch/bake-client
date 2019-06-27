/* eslint-disable no-use-before-define */
import React, { useState, useReducer } from 'react';
import LoginComponent from '../../views/authentication/LogInForm';
import reducer from '../../../reducers/loginReducer';
import initialState from '../../../store/initialState';

const Login = () => {
  const email = useFormInput('');
  const password = useFormInput('');
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <LoginComponent dispatch={dispatch} name={email} password={password} />
    </div>
  );
};

export default Login;

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
};
