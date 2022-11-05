import { ADD_USER, DELETE_USER, EDIT_USER, GET_SINGLE_USER, GET_USERS } from "./actionTypes";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        loading: false,
      };
    }
    case ADD_USER: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_SINGLE_USER: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }
    case EDIT_USER: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default usersReducers;