export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      const newState = Object.assign({}, state);
      newState.loginReducer.authenticated = true;

      return newState;
    }
    case 'LOGIN_FAILURE': {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
