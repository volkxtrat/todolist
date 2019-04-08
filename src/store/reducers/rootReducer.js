import { combineReducers } from "redux";
import { userReducer } from "./user";
import { projectsReducer } from "./projects";

export const rootReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer
});
