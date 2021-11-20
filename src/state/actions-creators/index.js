export const changeSearch = (text) => {
  return (dispatch) => {
    dispatch({
      type: "CHANGE",
      payload: text,
    });
  };
};

export const deleteSearch = () => {
  return (dispatch) => {
    dispatch({
      type: "DELETE",
      payload: "",
    });
  };
};

export const setSearchResults = (arrayOfPlayers) => {
  return (dispatch) => {
    dispatch({
      type: "SET_RESULTS",
      payload: arrayOfPlayers,
    });
  };
};

export const clearSearchResults = () => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_RESULTS",
      payload: [],
    });
  };
};
