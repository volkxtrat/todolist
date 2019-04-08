import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

import DrawerItem from "../DrawerItem/DrawerItem";

const styles = theme => ({
  LinkActive: {
    boxShadow: `inset 4px 0 0 ${theme.palette.primary.main}`,
    background: theme.palette.action.hover,
    // transition: `all .2s ${theme.transitions.easing.easeInOut}`
  }
});

function DrawerLink({ path, children, classes, ...props }) {
  return (
    <DrawerItem
      activeClassName={classes.LinkActive}
      as={NavLink}
      to={path}
      {...props}
    >
      {children}
    </DrawerItem>
  );
}

DrawerLink.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawerLink);
