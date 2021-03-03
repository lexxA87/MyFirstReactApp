let rerenderEntireTree = () => {
  console.log("State changed!");
} 

let state = {
  profilePage: {
    posts: [
      { message: "Hi! How are you?", likeCount: 15, id: 1 },
      { message: "It's my first React App!", likeCount: 99, id: 2 },
      { message: "It's very good!", likeCount: 1, id: 3 },
      { message: "It's very very good!", likeCount: 3, id: 4 },
    ],
    newPostText: "",
  },
  diologsPage: {
    diologs: [
      { name: "Lexx", id: "1" },
      { name: "Lexx2", id: "2" },
      { name: "Lexx3", id: "3" },
      { name: "Lexx4", id: "4" },
      { name: "Lexx5", id: "5" },
    ],
    messages: [
      { mesaage: "Hi!" },
      { message: "How are you?" },
      { message: "Welcome to React!" },
      { message: "Yooooo!" },
      { message: "What are you doing?!" },
      { message: "What's up?!" },
    ],
    newMessageText: "",
  },
  friendsBlock: {
    friends: [
      {
        avatarSrc:
          "https://themindsetproject.com.au/wp-content/uploads/2017/08/avatar-icon.png",
        name: "Lexx_1",
        id: "1",
      },
      {
        avatarSrc:
          "https://themindsetproject.com.au/wp-content/uploads/2017/08/avatar-icon.png",
        name: "Lexx_2",
        id: "2",
      },
      {
        avatarSrc:
          "https://themindsetproject.com.au/wp-content/uploads/2017/08/avatar-icon.png",
        name: "Lexx_3",
        id: "3",
      },
    ],
  },
};

export const addPost = () => {
  let newPost = {
    message: state.profilePage.newPostText,
    likeCount: 0,
    id: 5,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = {
    message: state.diologsPage.newMessageText,
  };
  state.diologsPage.messages.push(newMessage);
  state.diologsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
  state.diologsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
