function catReducer(state = [], action) {
  switch (action.type) {
    case "STORE_CATS":
      return action.payload;
    default:
      return [...state];
  }
}

export default catReducer;
