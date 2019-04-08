import React, { Component } from "react";
import Lens from "@material-ui/icons/LensOutlined";
import MoreVert from "@material-ui/icons/MoreVert";
import { memoize, isEqual } from "lodash";

import DrawerLink from "../DrawerLink/DrawerLink";
import routes from "../../../routes/routes";
import { IconButton } from "@material-ui/core";
import ProjectsFormAdd from "../../Projects/ProjectsFormAdd/ProjectsFormAdd";
import DrawerProjectsItem from "../DrawerProjectsItem/DrawerProjectsItem";

// export default function DrawerProjectsList({ projects, menuAction }) {
export default class DrawerProjectsList extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return !isEqual(nextProps.projects, this.props.projects);
  // }
  memoizedRightClick = memoize(id => e =>
    this.props.menuAction.handleRightClickMenu(e, id)
  );
  memoizedClick = memoize(id => e =>
    this.props.menuAction.handleClickMenu(e, id)
  );

  listItems = Object.keys(this.props.projects).map(key => {
    const { projects, isRename, actions, menuAction, menuId } = this.props;
    const project = projects[key];
    return isRename && menuId === project.id ? (
      <ProjectsFormAdd
        handleClose={menuAction.toggleIsRename}
        fetch={actions.fetchUpdateRename}
        oneOf={["xtrat"]}
      />
    ) : (
      <DrawerLink
        onContextMenu={this.memoizedRightClick(project.id)}
        key={project.id}
        to={`${routes.projects}/${project.id}`}
        primary={project.name}
        icon={Lens}
      >
        <IconButton onClick={this.memoizedClick(project.id)}>
          <MoreVert fontSize="small" />
        </IconButton>
      </DrawerLink>
    );
  });

  render() {
    return <>{this.listItems}</>;
  }
}
