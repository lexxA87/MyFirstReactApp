import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
  posts: [
    { message: "Hi! How are you?", likeCount: 15, id: 1 },
    { message: "It's my first React App!", likeCount: 99, id: 2 },
    { message: "It's very good!", likeCount: 1, id: 3 },
    { message: "It's very very good!", likeCount: 3, id: 4 },
  ],
};

it("Length posts should be incremented", () => {
  //1. test Data
  let action = addPostActionCreator("Hi everyOne!!!");

  //2. action

  let newState = profileReducer(state, action);

  //3. expectation

  expect(newState.posts.length).toBe(5);
});

it("Text new posts should be correct", () => {
  //1. test Data
  let action = addPostActionCreator("Hi everyOne!!!");

  //2. action

  let newState = profileReducer(state, action);

  //3. expectation

  expect(newState.posts[4].message).toBe("Hi everyOne!!!");
});

it("After deleting length messages should be decremented", () => {
  //1. test Data
  let action = deletePost(1);

  //2. action

  let newState = profileReducer(state, action);

  //3. expectation

  expect(newState.posts.length).toBe(3);
});

it("After deleting length messages shouldn't be decrement if id is incorrect", () => {
    //1. test Data
    let action = deletePost(1000);
  
    //2. action
  
    let newState = profileReducer(state, action);
  
    //3. expectation
  
    expect(newState.posts.length).toBe(4);
  });
