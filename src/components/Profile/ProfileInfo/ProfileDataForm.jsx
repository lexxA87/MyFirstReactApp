import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, TextArea } from "../../Common/FormsControls/FormsControls";

const ProfileDataForm = ({ handleSubmit, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>

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
        <b>Professional skills</b>: {profile.lookingForAJobDescription}
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
        {/* {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })} */}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "profiloe-form" })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
