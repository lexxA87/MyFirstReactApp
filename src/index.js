import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import { BrowserRouter, Route } from "react-router-dom";
import { addPost } from "./redux/state";
import { addMessage } from "./redux/state";
import { updateNewPostText } from "./redux/state";
import { updateNewMessageText } from "./redux/state";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          addMessage={addMessage}
          updateNewPostText={updateNewPostText}
          updateNewMessageText={updateNewMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
