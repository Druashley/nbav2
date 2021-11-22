import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import searchResultReducer from "./searchResultReducer";
import playerListReducer from "./playerListReducer";

const reducers = combineReducers({
  search: searchReducer,
  searchResult: searchResultReducer,
  playerList: playerListReducer,
});

export default reducers;
