import React from "react";
import Edit from "@material-ui/icons/EditOutlined";
import ColorLens from "@material-ui/icons/ColorLensOutlined";
import Lock from "@material-ui/icons/LockOutlined";
import Delete from "@material-ui/icons/DeleteOutlined";
import { FormattedMessage } from "react-intl";

export default {
  rename: {
    controlName: "rename",
    caption: <FormattedMessage id="projectsMenu.rename" />,
    icon: Edit
  },
  favorite: {
    controlName: "favorite",
    caption: <FormattedMessage id="projectsMenu.lock" />,
    icon: Lock
  },
  color: {
    controlName: "color",
    caption: <FormattedMessage id="projectsMenu.color" />,
    icon: ColorLens
  },
  delete: {
    controlName: "delete",
    caption: <FormattedMessage id="projectsMenu.delete" />,
    icon: Delete
  }
};
