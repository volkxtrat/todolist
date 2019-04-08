import React from "react";
import PropTypes from "prop-types";
import menuItems from "./menuItems";

import LockOpen from "@material-ui/icons/LockOpenOutlined";
import Lock from "@material-ui/icons/LockOutlined";
import Menu from "../../Ui/Menu/Menu";
import { FormattedMessage } from "react-intl";

const ProjectsMenu = ({
  anchorProps,
  isOpen,
  handleClose,
  isFavorite,
  onSelectMenu,
  ...others
}) => {
  menuItems.favorite.iconComponent = !isFavorite ? Lock : LockOpen;
  menuItems.favorite.caption = isFavorite ? (
    <FormattedMessage id="projectsMenu.unLock" />
  ) : (
    <FormattedMessage id="projectsMenu.lock" />
  );
  return (
    <Menu
      isOpen={isOpen}
      menuItems={menuItems}
      handleClose={handleClose}
      onSelectMenu={onSelectMenu}
      anchorProps={anchorProps}
      {...others}
    />
  );
};

ProjectsMenu.propTypes = {
  id: PropTypes.string,
  isFavorite: PropTypes.bool,
  anchorProps: PropTypes.object,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
};

export default ProjectsMenu;
