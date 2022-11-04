import {combineReducers} from "redux";
import usersReducers from "./reducer";
import store from "./store";




const rootReducer = combineReducers({
    users: usersReducers
});

export default rootReducer;