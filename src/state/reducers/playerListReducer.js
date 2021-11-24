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
      return newState;
    case "SORT_BY_STAT":
      let sortedPlayerList = [...state];
      if (action.payload.ascending) {
        sortedPlayerList.sort((a, b) => {
          return (
            a.stats.data[0][action.payload.stat] -
            b.stats.data[0][action.payload.stat]
          );
        });
      }
      if (!action.payload.ascending) {
        sortedPlayerList.sort((a, b) => {
          return (
            b.stats.data[0][action.payload.stat] -
            a.stats.data[0][action.payload.stat]
          );
        });
      }
      return sortedPlayerList;
    default:
      return state;
  }
};

export default playerListReducer;
