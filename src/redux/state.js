let state = {
  profilePage: {
    posts: [
      { message: "Hi! How are you?", likeCount: 15 },
      { message: "It's my first React App!", likeCount: 99 },
      { message: "It's very good!", likeCount: 1 },
      { message: "It's very very good!", likeCount: 3 },
    ],
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
    ]
  }
};

export default state;
