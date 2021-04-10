import s from "./Diologues.module.css";
import DiologItem from "./DiologItem/DiologItem";
import Message from "./Message/Message";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { TextArea } from "../Common/FormsControls/FormsControls";

const Diologues = (props) => {
  let diologsElements = props.diologsPage.diologs.map((d) => (
    <DiologItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.diologsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let addNewMessage = (values) => {
    //debugger;
    //alert(values.newMessageBody);
    props.addMessage(values.newMessageBody);
  };

  return (
    <div className={s.diologs}>
      <div className={s.diologsItems}>{diologsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <hr />
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      New message
      <div>
        <Field
          component={TextArea}
          placeholder={"Enter your message"}
          name={"newMessageBody"}
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "diologAddMessageForm" })(
  AddMessageForm
);

export default Diologues;
