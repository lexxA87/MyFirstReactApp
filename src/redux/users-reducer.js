import {userAPI, followAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";

const FOLLOW = "my-first-react-app/users/FOLLOW";
const UNFOLLOW = "my-first-react-app/users/UNFOLLOW";
const SET_USERS = "my-first-react-app/users/SET-USERS";
const SET_CURRENT_PAGE = "my-first-react-app/users/SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "my-first-react-app/users/SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "my-first-react-app/users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "my-first-react-app/users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true}),

            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false}),
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.count,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter((id) => id !== action.userID),
            };
        default:
            return state;
    }
};

export const followSuccess = (userID) => ({type: FOLLOW, userID});

export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USER_COUNT,
    count: totalUsersCount,
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});

export const toggleFollowingProgress = (isFetching, userID) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userID,
});

//Санки:

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await userAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    };
};

export const getChangePage = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));
        const data = await userAPI.getUsers(pageNumber, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
    };
};


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, followAPI.follow, unfollowSuccess);
    };
};

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, followAPI.unfollow, followSuccess);
    };
};

export default usersReducer;
