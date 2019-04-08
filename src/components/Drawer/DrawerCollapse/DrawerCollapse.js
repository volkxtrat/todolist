import React from "react";
import { Collapse, List } from "@material-ui/core";

function DrawerCollapse({ isOpen, children }) {
  return (
    <>
      <Collapse
        in={isOpen}
        timeout="auto"
        unmountOnExit
        style={{ overflow: "auto" }}
      >
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  );
}

export default DrawerCollapse;
