const playerListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return [
        ...state,
        {
          uuid: action.payload.uuid,
          id: action.payload.id,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          team: action.payload.team.abbreviation,
          stats: action.payload.stats,
          season: action.payload.season,
        },
      ];
    case "REMOVE_PLAYER":
      return state.filter((player) => player.uuid !== action.payload);
    case "UPDATE_STATS":
      let newState = [...state];
      newState.forEach((player) => {
        if (player.uuid === action.payload.uuid) {
          let newPlayer = { ...player };
          newPlayer.stats = action.payload.stats;
          newPlayer.season = action.payload.season;
          return [...newState, newPlayer];
        }
        return [...newState];
      });
      // let playerIndex = state.findIndex(
      //   (player) => player.uuid === action.payload.uuid
      // );
      // state[playerIndex].stats = action.payload.stats;
      console.log("returing state");
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default playerListReducer;
