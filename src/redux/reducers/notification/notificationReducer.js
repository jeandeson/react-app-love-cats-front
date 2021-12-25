const initialState = { showMessage: false, type: "notification-sucess", message: "default" };

function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_ACTION":
      return { ...state, showMessage: true, type: action.payload.type, message: action.payload.message };
    case "HIDE_ACTION":
      return { ...state, showMessage: false, type: "notification-sucess" };
    default:
      return initialState;
  }
}

export default notificationReducer;
