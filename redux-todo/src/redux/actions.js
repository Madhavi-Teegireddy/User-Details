import * as types from "./actionType";

import axios from "axios";




const getUsers = (users) => ({
    types:types.GET_USERS,
    payload:users,
});

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`)
        .then((resp) => {
            console.log("resp", resp);
            dispatch(getUsers(resp.data));
        })
        .catch((error) => console.log(error));
    };
}