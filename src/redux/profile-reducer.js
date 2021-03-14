const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { message: "Hi! How are you?", likeCount: 15, id: 1 },
    { message: "It's my first React App!", likeCount: 99, id: 2 },
    { message: "It's very good!", likeCount: 1, id: 3 },
    { message: "It's very very good!", likeCount: 3, id: 4 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        message: state.newPostText,
        likeCount: 0,
        id: 5,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
