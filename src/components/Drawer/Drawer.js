import React from "react";
import styled from "styled-components";
import { MuiThemeProvider, List } from "@material-ui/core";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";

import { createTheme } from "../../theme/MuiBaseTheme";

import DrawerLinkList from "./DrawerLinkList/DrawerLinkList";
import DrawerItem from "./DrawerItem/DrawerItem";
import DrawerProjects from "../../containers/DrawerProjects";

const StyledDrawer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 240px;
  border-right: 1px solid ${p => p.theme.palette.divider};
  background: ${p => p.theme.palette.background.paper};
  overflow: hidden;
`;

const Drawer = ({ userLogout }) => {
  const theme = createTheme({
    overrides: {
      MuiIconButton: {
        root: {
          padding: 0
        }
      },
      MuiListItemIcon: {
        root: {
          marginRight: 0
        }
      }
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <StyledDrawer theme={theme}>
        <List component="nav" disablePadding style={{ overflow: "hidden" }}>
          <DrawerLinkList />
          <DrawerProjects />
        </List>
        <List component="nav">
          <DrawerItem
            icon={PowerSettingsNew}
            primary="Sign out"
            onClick={userLogout}
          />
        </List>
      </StyledDrawer>
    </MuiThemeProvider>
  );
};

export default Drawer;
