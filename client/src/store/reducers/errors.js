import { ADD_ERROR, REMOVE_ERROR } from "../actions/types";

const initialState = {
  message: null
};

export default (state = { message: null }, action) => {
  // const { type, error } = action;
  switch (action.type) {
    case ADD_ERROR: {
      console.log(action);

      return {
        ...state,
        message: action.error
      };
    }
    case REMOVE_ERROR:
      return {
        ...state,
        message: null
      };
    default:
      return state;
  }
};
