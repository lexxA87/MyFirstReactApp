import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
  posts: [
    { message: "Hi! How are you?", likeCount: 15, id: 1 },
    { message: "It's my first React App!", likeCount: 99, id: 2 },
    { message: "It's very good!", likeCount: 1, id: 3 },
    { message: "It's very very good!", likeCount: 3, id: 4 },
  ],

  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        message: action.newPostText,
        likeCount: 0,
        id: 5,
      };
      return { ...state, posts: [...state.posts, newPost] };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setUserStatus = (status) => {
  return {
    type: SET_USER_STATUS,
    status,
  };
};

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.myProfile(userId).then((data) => {
    //debugger;
    dispatch(setUserProfile(data));
  });
};

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getUserStatus(userId).then((responce) => {
    //debugger;
    dispatch(setUserStatus(responce.data));
  });
};

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateUserStatus(status).then((responce) => {
    if (responce.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export default profileReducer;
