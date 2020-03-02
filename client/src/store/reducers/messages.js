import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actions/types";

const message = (state = [], action) => {
  switch (action.type) {
    case LOAD_MESSAGES: {
      // console.log("reducers");
      return [...action.messages];
    }
    case REMOVE_MESSAGE:
      return state.filter(message => message._id !== action.id);
    default:
      return state;
  }
};

export default message;
