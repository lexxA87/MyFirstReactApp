import s from "./Diologues.module.css";
import DiologItem from "./DiologItem/DiologItem";
import Message from "./Message/Message";
import React from "react";

const Diologues = (props) => {
  let diologsElements = props.diologPage.diologs.map((d) => (
    <DiologItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.diologPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.diologs}>
      <div className={s.diologsItems}>{diologsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <hr />
        <div>
          New message
          <div>
            <textarea
              ref={newMessageElement}
              onChange={onMessageChange}
              value={props.diologPage.newMessageText}
            />
          </div>
          <div>
            <button onClick={addMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diologues;
