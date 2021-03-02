import s from "./Diologues.module.css";
import DiologItem from "./DiologItem/DiologItem";
import Message from "./Message/Message";
import React from "react";

const Diologues = (props) => {
  let diologsElements = props.state.diologs.map((d) => (
    <DiologItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    props.addMessage(text);
    newMessageElement.current.value = "";
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
            <textarea ref={newMessageElement}></textarea>
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
