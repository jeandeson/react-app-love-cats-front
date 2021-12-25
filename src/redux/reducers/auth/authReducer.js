function authReducer(state = {}, action) {
  switch (action.type) {
    case "LOGIN_ACTION":
      return action.payload;
    case "LOGOUT_ACTION":
      return (state = {});
    default:
      return state;
  }
}

export default authReducer;
