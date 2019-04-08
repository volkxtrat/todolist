import {
  ADD_PROJECT,
  GET_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECTS
} from "./actionTypes";
import { orderBy } from "lodash";
import axios from "../../axios/axiosApp";
import { updateOrderObject, uniqueId } from "../../utils";

export function fetchAddProject(name) {
  return async (dispatch, getState) => {
    try {
      const date = new Date().valueOf();
      const userId = getState().user.userId;
      const token = getState().user.token;
      const projects = getState().projects;

      const projectKeys = Object.keys(projects);
      let itemOrder = 0;
      if (projectKeys.length)
        itemOrder =
          Math.max.apply(
            null,
            projectKeys.map(key => projects[key].itemOrder)
          ) + 1;
      const project = {
        id: uniqueId(),
        name,
        timestamp: date,
        color: "",
        isFavorite: false,
        itemOrder
      };
      dispatch(dispatchAddProject(project));
      await axios.put(
        `/projects/${userId}/${project.id}.json?auth=${token}`,
        project
      );
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchUpdateColor(id, color) {
  return async (dispatch, getState) => {
    try {
      const userId = getState().user.userId;
      const token = getState().user.token;
      dispatch(dispatchUpdateProject(id, { color }));
      await axios.patch(`/projects/${userId}/${id}.json?auth=${token}`, {
        color
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchUpdateRename(id, rename) {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      const userId = getState().user.userId;
      dispatch(dispatchUpdateProject(id, { name: rename }));
      await axios.patch(`/projects/${userId}/${id}.json?auth=${token}`, {
        name: rename
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchUpdateFavorite(id) {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      const userId = getState().user.userId;
      const isFavorite = getState().projects[id].isFavorite;
      dispatch(dispatchUpdateProject(id, { isFavorite: !isFavorite }));
      await axios.patch(`/projects/${userId}/${id}.json?auth=${token}`, {
        isFavorite: !isFavorite
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchUpdateProjects(projects) {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      const userId = getState().user.userId;
      dispatch(dispatchUpdateProjects(projects));
      await axios.patch(`/projects/${userId}.json?auth=${token}`, {
        ...projects
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchDeleteProject(id) {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      const userId = getState().user.userId;
      dispatch({ type: DELETE_PROJECT, id });
      await axios.delete(`/projects/${userId}/${id}.json?auth=${token}`);
      const getProjects = getState().projects;

      const sortedProjects = orderBy(getProjects, ["itemOrder"], ["asc"]);
      const sortedKeys = sortedProjects.map(project => project.id);

      const projects = updateOrderObject(getProjects, sortedKeys, "itemOrder");
      dispatch(dispatchUpdateProjects(projects));
      await axios.patch(`/projects/${userId}.json?auth=${token}`, {
        ...projects
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchGetProjects() {
  return async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      const userId = getState().user.userId;
      const res = await axios.get(`/projects/${userId}.json?auth=${token}`);
      if (res.data)
        dispatch({
          type: GET_PROJECT,
          projects: res.data
        });
    } catch (error) {
      console.error(error);
    }
  };
}

function dispatchAddProject(project) {
  return { type: ADD_PROJECT, project };
}

function dispatchUpdateProject(id, value) {
  return { type: EDIT_PROJECT, id, value };
}

function dispatchUpdateProjects(projects) {
  return { type: UPDATE_PROJECTS, projects };
}
