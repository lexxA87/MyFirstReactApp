import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, TextArea } from "../../Common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";
import st from "../../Common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      {error && <div className={st.formSummaryError}>{error}</div>}
      <div>
        <b>Full name</b>:{" "}
        <Field
          placeholder={"Full name"}
          component={Input}
          name={"fullName"}
          validate={[]}
        />
      </div>
      <div>
        <b>Looking for a job</b>:{" "}
        <Field type={"checkbox"} component={Input} name={"lookingForAJob"} />
      </div>

      <div>
        <b>Professional skills</b>:
        <Field
          placeholder={"Professional skills"}
          component={TextArea}
          name={"lookingForAJobDescription"}
          validate={[]}
        />
      </div>

      <div>
        <b>About me</b>:
        <Field
          placeholder={"About me"}
          component={TextArea}
          name={"aboutMe"}
          validate={[]}
        />
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div className={s.contact}>
              <b>{key}: </b>
              <Field
                placeholder={key}
                component={Input}
                name={"contacts." + key}
                validate={[]}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "profile-form" })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
