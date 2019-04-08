import React from "react";
import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// const styles = theme => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper
//   },
//   nested: {
//     paddingLeft: theme.spacing.unit * 4
//   }
// });

const DrawerItem = ({ primary, secondary, as, icon, children, ...props }) => {
  const Icon = icon;
  return (
    <ListItem component={as} button {...props}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText inset primary={primary} secondary={secondary} />
      {children}
    </ListItem>
  );
};

DrawerItem.propTypes = {
  // classes: PropTypes.object.isRequired,
  secondary: PropTypes.string,
  primary: PropTypes.string.isRequired
};

export default DrawerItem;
