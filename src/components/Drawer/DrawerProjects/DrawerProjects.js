import React, { useState } from "react";
import Folder from "@material-ui/icons/FolderOutlined";
import FolderOpen from "@material-ui/icons/FolderOpenOutlined";
import Add from "@material-ui/icons/Add";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { IconButton, List } from "@material-ui/core";

import DrawerCollapse from "../DrawerCollapse/DrawerCollapse";
import DrawerLink from "../DrawerLink/DrawerLink";
import routes from "../../../routes/routes";
import DrawerProjectsList from "../DrawerProjectsList/DrawerProjectsList";
// import useToggle from "../../../hooks/useToggle";
import ProjectsFormAdd from "../../Projects/ProjectsFormAdd/ProjectsFormAdd";
import withProjectsMenu from "../../../hoc/withProjectsMenu";
import ProjectsMenu from "../../Projects/ProjectsMenu/ProjectsMenu";
import withMenu from "../../../hoc/withMenu";

function DrawerProjects({ projects, actions, menu }) {
  const [state, setState] = useState([{ isCollapse: false, isAdd: false }]);
  const { isCollapse, isAdd } = state;

  function toggleCollapse(e) {
    e.stopPropagation();
    e.preventDefault();
    setState({ isCollapse: !isCollapse, isAdd });
  }
  function toggleFormAdd(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (!isCollapse && !isAdd) setState({ isCollapse: true, isAdd: true });
    else setState({ isCollapse, isAdd: !isAdd });
  }
  return (
    <>
      <DrawerLink
        exact
        to={routes.projects}
        icon={isCollapse ? FolderOpen : Folder}
        primary="Projects"
      >
        <IconButton onClick={toggleCollapse}>
          {isCollapse ? (
            <ExpandLess fontSize="small" />
          ) : (
            <ExpandMore fontSize="small" />
          )}
        </IconButton>
        <IconButton onClick={toggleFormAdd} disabled={isAdd}>
          <Add fontSize="small" />
        </IconButton>
      </DrawerLink>
      <DrawerCollapse isOpen={isCollapse}>
        {isAdd && (
          <ProjectsFormAdd
            handleClose={toggleFormAdd}
            fetch={actions.fetchAddProject}
            oneOf={["xtrat"]}
          />
        )}
        <DrawerProjectsList
          menuAction={menu.actions}
          isRename={menu.state.isRename}
          menuId={menu.state.id}
          actions={actions}
          projects={projects}
        />
      </DrawerCollapse>
      <ProjectsMenu {...menu.props} />
    </>
  );
}

export default withMenu(withProjectsMenu(DrawerProjects));
