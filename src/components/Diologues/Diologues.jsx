import s from "./Diologues.module.css";
import DiologItem from "./DiologItem/DiologItem";
import Message from "./Message/Message";
import React from "react";
import { Redirect } from "react-router";

const Diologues = (props) => {
  let diologsElements = props.diologsPage.diologs.map((d) => (
    <DiologItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.diologsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text);
  };

  return (
    <div className={s.diologs}>
      <div className={s.diologsItems}>{diologsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <hr />
        <div>
          New message
          <div>
            <textarea
              ref={newMessageElement}
              onChange={onMessageChange}
              value={props.diologsPage.newMessageText}
              placeholder="Enter your message"
            />
          </div>
          <div>
            <button onClick={onAddMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diologues;
