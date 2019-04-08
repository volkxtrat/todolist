import { createSelector } from "reselect";
import orderBy from "lodash/orderBy";

const getProjects = state => state.projects;
export const getSortedProjects = createSelector(
  [getProjects],
  projects => {
    return orderBy(projects, ["itemOrder"], ["asc"]);
  }
);

export const getCompletedProjectsCount = createSelector(
  [getProjects],
  projects =>
  projects.reduce((count, project) => (project.completed ? count + 1 : count), 0)
);
