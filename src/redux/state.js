let store = {
  _callSubscriber() {
    console.log("State changed!");
  },
  _state: {
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
        { message: "Hi!" },
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
  },
  getState() {
    return this._state;
  },
  addPost() {
    let newPost = {
      message: this._state.profilePage.newPostText,
      likeCount: 0,
      id: 5,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      message: this._state.diologsPage.newMessageText,
    };
    this._state.diologsPage.messages.push(newMessage);
    this._state.diologsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.diologsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
