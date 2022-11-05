

import { combineReducers } from "redux";
import usersReducers from "./reducer";

const rootReducer = combineReducers({
  usersData: usersReducers,
});

export default rootReducer;