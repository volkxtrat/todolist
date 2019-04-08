import {
  ADD_PROJECT,
  GET_PROJECT,
  EDIT_PROJECT,
  UPDATE_PROJECTS,
  DELETE_PROJECT
} from "../actions/actionTypes";

const initialState = {};

export function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT: {
      return {
        ...state,
        [action.project.id]: action.project
      };
    }
    case GET_PROJECT: {
      return {
        ...action.projects
      };
    }
    case EDIT_PROJECT: {
      const projects = { ...state };
      projects[action.id] = { ...projects[action.id], ...action.value };
      return {
        ...projects
      };
    }
    case UPDATE_PROJECTS: {
      const projects = { ...action.projects };
      return {
        ...projects
      };
    }
    case DELETE_PROJECT: {
      const projects = { ...state };
      delete projects[action.id];
      return {
        ...projects
      };
    }
    default:
      return state;
  }
}
