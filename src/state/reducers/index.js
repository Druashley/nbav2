import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import searchResultReducer from "./searchResultReducer";

const reducers = combineReducers({
  search: searchReducer,
  searchResult: searchResultReducer,
});

export default reducers;
