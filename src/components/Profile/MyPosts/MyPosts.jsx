import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
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

let AddMessagePost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      New post
      <div>
        <Field
          component="textarea"
          name="newPostText"
          placeholder="Enter your message"
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
