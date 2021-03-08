import { combineReducers, createStore } from "redux";
import diologsReducer from "./diologs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  diologsPage: diologsReducer,
  sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;
