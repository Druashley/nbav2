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
        },
      ];
    case "REMOVE_PLAYER":
      return state.filter((player) => player.uuid !== action.payload);
    default:
      return state;
  }
};

export default playerListReducer;
