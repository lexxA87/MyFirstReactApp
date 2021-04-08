const ADD_MESSAGE = "ADD-MESSAGE";

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
};

const diologsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        message: action.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText,
});

export default diologsReducer;
