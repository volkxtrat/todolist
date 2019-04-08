import React from "react";
import PropTypes from "prop-types";

import Menu from "@material-ui/core/Menu";
import Popover from "@material-ui/core/Popover";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SubMenu from "./SubMenu";

function MenuComponent({
  anchorEl,
  isOpen,
  handleClose,
  onSelectMenu,
  id,
  menuItems,
  isSub,
  anchorProps,
  ...others
}) {
  const renderMenuItems = () => {
    return Object.keys(menuItems).map(key => {
      const menuItem = menuItems[key];
      if (menuItem.hasOwnProperty("subMenuItems")) {
        return (
          <SubMenu
            key={menuItem.key}
            caption={menuItem.caption}
            iconComponent={menuItem.iconComponent}
            menuItems={menuItem.subMenuItems}
          />
        );
      }
      const ItemIcon = menuItem.icon;
      return (
        <MenuItem
          dense
          key={menuItem.controlName}
          onClick={() => onSelectMenu(menuItem.controlName)}
        >
          {ItemIcon && (
            <ListItemIcon>
              <ItemIcon />
            </ListItemIcon>
          )}
          <ListItemText
            style={{ padding: 0 }}
            primary={menuItem.caption}
            primaryTypographyProps={{
              noWrap: true
            }}
          />
        </MenuItem>
      );
    });
  };

  const menu = isSub ? (
    <Menu
      {...others}
      id={id}
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleClose}
    >
      <MenuList>{renderMenuItems()}</MenuList>
    </Menu>
  ) : (
    <Popover {...anchorProps} {...others} open={isOpen} onClose={handleClose}>
      <Paper>
        <MenuList>{renderMenuItems()}</MenuList>
      </Paper>
    </Popover>
  );
  return menu;
}

MenuComponent.propTypes = {
  anchorEl: PropTypes.any,
  menuItems: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  id: PropTypes.string
};

export default MenuComponent;
