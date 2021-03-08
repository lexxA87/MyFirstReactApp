let initialState = {
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

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
