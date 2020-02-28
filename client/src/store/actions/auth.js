import { apiCall, setTokenHeader } from "../../services/api";
import { SET_CURRENT_USER } from "./types";
import { addError, removeError } from "./errors";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function setAuthorizationToken(token) {
  setTokenHeader(token);
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function authUser(type, userData) {
  return dispatch => {
    // wrap thunk in a promise to wait for the API call
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem("jwtToken", token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(user));
          dispatch(removeError()); // if any previous errors, remove them
          resolve(); // indicate that the API call succeeded
        })
        .catch(err => {
          console.log(err.message);
          dispatch(addError(err.message)); // if any no previous errors, add them
          reject(); // indicate the API call failed
        });
    });
  };
}
