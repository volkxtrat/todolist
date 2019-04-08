import routes from "./routes";
import React from "react";

export default [
  {
    path: routes.inbox
    // component: <div>{routes.inbox}</div>
  },
  {
    path: routes.today
    // component: <div>{routes.today}</div>
  },
  {
    path: routes.week
    // component: <div>{routes.week}</div>
  },
  {
    path: routes.all
    // component: <div>{routes.all}</div>
  },
  {
    path: routes.projects,
    // component: <div>{routes.projects}</div>,
    exact: true
  },
  {
    path: routes.projectsId,
    // component: <div>{routes.projectsId}</div>,
    exact: true
  }
];
