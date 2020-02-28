import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: Object.keys(action.user).length > 0, // boolean value
        user: action.user
      };
    default:
      return state;
  }
};
