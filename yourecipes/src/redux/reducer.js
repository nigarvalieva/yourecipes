import React, { useReducer } from "react";

const initialState = {
  username: "",
  password: "",
  loggedIn: false,
  error: false,
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        loggedIn: true,
        username: "",
        password: "",
        error: false,
      };
    case "ERROR":
      return {
        ...state,
        error: "invalid",
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
      };
    case "USERNAME":
      return {
        ...state,
        username: action.value,
      };
    case "PASSWORD":
      return {
        ...state,
        password: action.value,
      };
    default:
      return state;
  }
};