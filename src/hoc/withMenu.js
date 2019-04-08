import React, { useRef, useState, useEffect } from "react";
import useToggle from "../hooks/useToggle";

const withMenu = WrappedComponent => {
  return ({ ...props }) => {
    const baseTargetData = useRef();
    const [isMenu, handleIsMenu] = useToggle(false);
    const [targetData, setTargetData] = useState({
      anchorEl: null,
      isContext: false,
      id: null,
      x: 0,
      y: 0
    });

    useEffect(() => {
      baseTargetData.current = targetData;
    }, []);

    // const resetTargetData = () => {
    //   const targetDataCopy = { ...baseTargetData };
    //   targetDataCopy.id = targetData.id;
    //   setTargetData(targetDataCopy);
    // };

    const handleClickMenu = (e, id) => {
      e.stopPropagation();
      e.preventDefault();
      const targetDataCopy = { ...baseTargetData };
      targetDataCopy.anchorEl = e.currentTarget;
      targetDataCopy.id = id;
      setTargetData(targetDataCopy);
      handleIsMenu.handleToggleOpen();
    };

    const handleRightClickMenu = (e, id) => {
      e.stopPropagation();
      e.preventDefault();
      const targetDataCopy = { ...baseTargetData };
      targetDataCopy.anchorEl = true;
      targetDataCopy.isContext = true;
      targetDataCopy.id = id;
      targetDataCopy.x = e.clientX;
      targetDataCopy.y = e.clientY;
      setTargetData(targetDataCopy);
      handleIsMenu.handleToggleOpen();
    };

    const menuAnchorProps = targetData.isContext
      ? {
          anchorReference: "anchorPosition",
          anchorPosition: {
            top: targetData.y,
            left: targetData.x
          }
        }
      : { anchorEl: targetData.anchorEl };

    const menu = {
      state: {
        id: targetData.id
      },
      actions: {
        handleClickMenu,
        handleRightClickMenu
      },
      props: {
        isOpen: isMenu,
        anchorProps: menuAnchorProps,
        handleClose: handleIsMenu.handleToggle
      }
    };

    return <WrappedComponent menu={menu} {...props} />;
  };
};

export default withMenu;
