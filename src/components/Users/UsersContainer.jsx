import React from "react";
import { connect } from "react-redux";
import {
  followedAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowedAC,
} from "../../redux/users-reducer ";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followedAC(userID));
    },
    unfollow: (userID) => {
      dispatch(unfollowedAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
