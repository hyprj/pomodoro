export const storeReducer = (state, action) => {
  switch (action.type) {
    case "test": {
      console.log("Xxd");
      return state;
    }
    default:
      return state;
  }
};
