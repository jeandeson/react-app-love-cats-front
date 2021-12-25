export function loginAction(payload) {
  return {
    type: "LOGIN_ACTION",
    payload: payload,
  };
}
export function logoutAction() {
  return {
    type: "LOGOUT_ACTION",
    payload: {},
  };
}
