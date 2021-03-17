import React from "react";
import { connect } from "react-redux";
import {
  followedAC,
  setUsersAC,
  unfollowedAC,
} from "../../redux/users-reducer ";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
