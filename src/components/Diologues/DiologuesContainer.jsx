import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/diologs-reducer";
import Diologues from "./Diologues";

const mapStateToProps = (state) => {
  return {
    diologsPage: state.diologsPage,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const DiologuesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Diologues);

export default DiologuesContainer;
