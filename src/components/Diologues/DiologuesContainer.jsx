import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/diologs-reducer";
import Diologues from "./Diologues";

/*const DiologuesContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Diologues
      addMessage={addMessage}
      onMessageChange={onMessageChange}
      diologsPage={state.diologsPage}
    />
  );
};*/

const mapStateToProps = (state) => {
  return {
    diologsPage: state.diologsPage,
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
