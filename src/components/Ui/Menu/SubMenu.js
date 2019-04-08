import React from "react";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "./Menu";
import ArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  subMenuItem: {
    display: "flex",
    justifyContent: "space-between"
  }
};

class SubMenuItem extends React.Component {
  state = {
    anchorEl: null
  };
  handleClickItem = e => {
    this.setState({ anchorEl: e.currentTarget });
  };
  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { caption, iconComponent, menuItems, classes } = this.props;
    const { anchorEl } = this.state;
    const isOpen = Boolean(anchorEl);
    const ItemIcon = iconComponent;
    return (
      <React.Fragment>
        <MenuItem
          dense
          onClick={this.handleClickItem}
          className={classes.subMenuItem}
        >
          {ItemIcon && (
            <ListItemIcon>
              <ItemIcon />
            </ListItemIcon>
          )}
          <ListItemText primary={caption} />
          <ArrowRightIcon />
        </MenuItem>
        <Menu
          isSub
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          isOpen={isOpen}
          menuItems={menuItems}
          anchorEl={anchorEl}
          handleClose={this.handleCloseMenu}
        />
      </React.Fragment>
    );
  }
}

SubMenuItem.propTypes = {
  caption: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired
};

export default withStyles(styles)(SubMenuItem);
