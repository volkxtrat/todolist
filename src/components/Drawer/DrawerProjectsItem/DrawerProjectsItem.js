import React from "react";
import MoreVert from "@material-ui/icons/MoreVert";
import Lens from "@material-ui/icons/LensOutlined";
import { IconButton } from "@material-ui/core";

import ProjectsFormAdd from "../../Projects/ProjectsFormAdd/ProjectsFormAdd";
import DrawerLink from "../DrawerLink/DrawerLink";
import routes from "../../../routes/routes";

export default function DrawerProjectsItem({
  actions,
  menuAction,
  isRename,
  menuId,
  id,
  name
}) {
  return (
    <div>
      {isRename && menuId === id ? (
        <ProjectsFormAdd
          handleClose={menuAction.toggleIsRename}
          fetch={actions.fetchUpdateRename}
          oneOf={["xtrat"]}
        />
      ) : (
        <DrawerLink
          onContextMenu={this.memoizedRightClick(id)}
          key={id}
          to={`${routes.projects}/${id}`}
          primary={name}
          icon={Lens}
        >
          <IconButton onClick={this.memoizedClick(id)}>
            <MoreVert fontSize="small" />
          </IconButton>
        </DrawerLink>
      )}
    </div>
  );
}
