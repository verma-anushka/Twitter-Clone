import { ADD_ERROR, REMOVE_ERROR } from "./types";

export const addError = error => {
  // console.log("2");
  // console.log(error);
  return {
    type: ADD_ERROR,
    error
  };
};

export const removeError = () => {
  // console.log("3");

  return {
    type: REMOVE_ERROR
  };
};
