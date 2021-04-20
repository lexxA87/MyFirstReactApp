import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { TextArea } from "../../Common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  //console.log("render myPOsts!");
  let postsElement = [...props.posts].reverse().map((p) => (
    <Post message={p.message} likeCount={p.likeCount} id={p.id} />
  ));

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddMessagePost onSubmit={addNewPost} />
      <div className={s.oldPosts}>{postsElement}</div>
    </div>
  );
};

const maxLength10 = maxLengthCreator(10);

let AddMessagePost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      New post
      <div>
        <Field
          component={TextArea}
          name="newPostText"
          placeholder="Enter your message"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

AddMessagePost = reduxForm({ form: "newPost" })(AddMessagePost);

export default MyPosts;
