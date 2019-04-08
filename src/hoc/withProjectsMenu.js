import React, { useEffect } from "react";
import useToggle from "../hooks/useToggle";
import withMenu from "./withMenu";
// import usePrevious from "../hooks/usePrevious";
// import ColorPicker from "../components/Ui/ColorPicker/ColorPicker";
// import ProjectsMenu from "../components/Projects/ProjectsMenu/ProjectsMenu";

function withProjectsMenu(WrappedComponent) {
  return ({ projects, actions, menu, ...other }) => {
    const [isRename, handleIsRename] = useToggle(false);
    const [isColor, handleIsColor] = useToggle(false);
    const { id } = menu.state;

    useEffect(() => {
      if (!isColor) menu.props.handleClose();
    }, [isColor]);

    const onFavoriteProject = () => {
      actions.fetchUpdateFavorite(id);
    };

    const onDeleteProject = () => {
      console.log(id);
      actions.fetchDeleteProject(id);
    };

    const onSelectMenu = controlName => {
      console.log(controlName);
      menu.props.handleClose();
      switch (controlName) {
        case "rename": {
          handleIsRename.handleToggle();
          return;
        }
        case "color": {
          handleIsColor.handleToggle();
          return;
        }
        case "favorite": {
          onFavoriteProject();
          return;
        }
        case "delete": {
          onDeleteProject();
          return;
        }
        default:
          break;
      }
    };

    const props = {
      ...other,
      actions,
      projects
    };

    const projectsMenu = {
      actions: {
        ...menu.actions,
        toggleIsRename: handleIsRename.handleToggle
      },
      state: {
        ...menu.state,
        isRename,
        isColor
      },
      props: {
        ...menu.props,
        onSelectMenu: onSelectMenu,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        }
      }
    };

    return <WrappedComponent menu={projectsMenu} {...props} />;
  };
}

export default withProjectsMenu;
