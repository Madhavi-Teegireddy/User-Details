import axios from "axios";
import { ADD_USER, DELETE_USER, EDIT_USER, GET_SINGLE_USER, GET_USERS } from "./actionTypes";

const getUsers = (user) => ({
  type: GET_USERS,
  payload: user,
});

const userDeleted = () => ({
  type: DELETE_USER,
});

const userAdded = () => ({
  type: ADD_USER,
});

const singleUser = (user) => ({
  type: GET_SINGLE_USER,
  payload: user,
});

const userEdited = () => ({
  type: EDIT_USER,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log("res:", res.data);

        dispatch(getUsers(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((err) => console.log(err));
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((res) => {
        console.log("UserAdded:", res);
        dispatch(userAdded());
        dispatch(loadUsers());
      })
      .catch((err) => console.log(err));
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("edit:", res);
        dispatch(singleUser(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const editUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((res) => {
        console.log("edit:", res);
        dispatch(userEdited());
        dispatch(loadUsers())
      })
      .catch((err) => console.log(err));
  };
};