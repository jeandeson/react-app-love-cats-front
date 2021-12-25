export function showAction(payload) {
  return {
    type: "SHOW_ACTION",
    payload: payload,
  };
}
export function hideAction(payload) {
  return {
    type: "HIDE_ACTION",
    payload: payload,
  };
}
