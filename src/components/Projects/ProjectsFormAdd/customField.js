import React from "react";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Input
} from "@material-ui/core";
import Lens from "@material-ui/icons/LensOutlined";
import Add from "@material-ui/icons/Add";

export const ProjectAddFormik = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const currError = errors.hasOwnProperty(field.name);
  const currTouched = touched.hasOwnProperty(field.name);
  const isError = currTouched && currError;

  const title = (
    <Input
      autoFocus
      fullWidth
      disableUnderline
      margin="dense"
      placeholder="projects name"
      type="text"
      {...field}
      {...props}
    />
  );

  return (
    <ListItem>
      <ListItemIcon>
        <Lens />
      </ListItemIcon>
      <ListItemText
        primary={title}
        secondary={isError && errors.name}
        primaryTypographyProps={{
          noWrap: true
          // variant: variantPrimary
        }}
        secondaryTypographyProps={{
          noWrap: true,
          // variant: variantSecondary,
          color: isError ? "error" : "default"
        }}
      />
      <IconButton
        onClick={e => {
          e.stopPropagation();
        }}
        disabled={isError}
        type="submit"
      >
        <Add fontSize="small" />
      </IconButton>
    </ListItem>
  );
};
