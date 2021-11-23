// sets texts in the search bar.
export const changeSearch = (text) => {
  return (dispatch) => {
    dispatch({
      type: "CHANGE",
      payload: text,
    });
  };
};
// When this function is called it clears the search bar text.
export const deleteSearch = () => {
  return (dispatch) => {
    dispatch({
      type: "DELETE",
      payload: "",
    });
  };
};

// Get request is done at the component level, and the result is passed in as an array
// It should be an object with two key value pairs
// 1. data - which has result information
// 2. meta - pagination information
export const setSearchResults = (arrayOfResults) => {
  return (dispatch) => {
    dispatch({
      type: "SET_RESULTS",
      payload: arrayOfResults,
    });
  };
};

// Function that clears the resultArray
export const clearSearchResults = () => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_RESULTS",
      payload: [],
    });
  };
};

// adds a player to list
// object from the api is passed in as the payload
export const addToPlayerList = (player) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_PLAYER",
      payload: player,
    });
  };
};

// Removes a player from the list uses uuid that is created when the player is added
// uuid and not the api id is used because a user may compare a player aginst themselves
export const removePlayerFromList = (uuid) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_PLAYER",
      payload: uuid,
    });
  };
};

export const updatePlayerStatsBySeason = (player) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_STATS",
      payload: player,
    });
  };
};
