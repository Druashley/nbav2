const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE":
      return action.payload;
    case "DELETE":
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
