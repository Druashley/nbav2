const searchResultReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_RESULTS":
      return action.payload;
    case "DELETE_RESULTS":
      return action.payload;
    default:
      return state;
  }
};

export default searchResultReducer;
