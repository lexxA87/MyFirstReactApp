import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} id={p.id} />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        New post
        <div>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
            ref={newPostElement}
            placeholder="Enter your message"
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.oldPosts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
