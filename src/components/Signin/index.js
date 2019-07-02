/* eslint-disable no-use-before-define */
import React, { useState, useReducer, useEffect } from 'react';
import LoginComponent from './LoginForm';
import login from '../../store/actionCreators/login';
import reducer from '../../store/reducers/loginReducer';
import initialState from '../../store/initialState';

const Login = () => {
  const [errors, setErrors] = useState({});
  const name = useFormInput('', errors, setErrors);
  const password = useFormInput('', errors, setErrors);
  const { handleLoginRequest } = useFormSubmit({ name, password }, errors, setErrors);

  return (
    <div>
      <LoginComponent
        login={handleLoginRequest}
        errors={errors}
        name={name}
        password={password}
      />
    </div>
  );
};

export default Login;

const useFormInput = (initialValue, errors, setErrors) => {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
    const newErrors = { ...errors };
    newErrors.username = '';
    if (e.target.type === 'password') newErrors.password = '';
    setErrors(newErrors);
  }

  return {
    value,
    reset: () => setValue(''),
    onChange: handleChange
  };
};

const validate = (values) => {
  const { name, password } = values;
  const errors = {};
  if (name.value === '') {
    errors.username = 'Please enter a username';
  }
  if (password.value === '') {
    errors.password = 'Please enter a password';
  }

  return errors;
};

const useFormSubmit = (values, errors, setErrors) => {
  const { name, password } = values;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      login({ username: name.value, password: password.value })(dispatch);
      name.reset();
      password.reset();
    }
  }, [errors]);

  const handleLoginRequest = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    handleLoginRequest
  };
};
