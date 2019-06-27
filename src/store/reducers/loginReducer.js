export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return {
        ...state
      };
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
