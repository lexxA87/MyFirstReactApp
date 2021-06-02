import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

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
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
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

export const savePhoto = (file) => async (dispatch) => {
  let responce = await profileAPI.savePhoto(file);
  if (responce.data.resultCode === 0) {
    dispatch(savePhotoSuccess(responce.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Something wrong!";
    dispatch(stopSubmit("profile-form", { _error: message }));
    return Promise.reject(message);
  }
};

export default profileReducer;
