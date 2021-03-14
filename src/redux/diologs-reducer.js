const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  diologs: [
    { name: "Lexx", id: "1" },
    { name: "Lexx2", id: "2" },
    { name: "Lexx3", id: "3" },
    { name: "Lexx4", id: "4" },
    { name: "Lexx5", id: "5" },
  ],
  messages: [
    { message: "Hi!" },
    { message: "How are you?" },
    { message: "Welcome to React!" },
    { message: "Yooooo!" },
    { message: "What are you doing?!" },
    { message: "What's up?!" },
  ],
  newMessageText: "",
};

const diologsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.newText };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

export default diologsReducer;
