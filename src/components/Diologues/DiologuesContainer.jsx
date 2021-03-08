import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/diologs-reducer";
import Diologues from "./Diologues";

const DiologuesContainer = (props) => {
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
};

export default DiologuesContainer;
