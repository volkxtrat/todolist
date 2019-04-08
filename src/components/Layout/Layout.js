import React, { PureComponent } from "react";
import styled from "styled-components";

import Header from "../Header/Header";
import Drawer from "../../containers/Drawer";
import Workspace from "../../containers/Workspace";

const StyledSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const StyledMainSection = styled.section`
  display: flex;
  align-items: stretch;
  flex: 1;
`;

class Layout extends PureComponent {
  render() {
    return (
      <StyledSection>
        <Header />
        <StyledMainSection>
          <Drawer />
          <Workspace />
        </StyledMainSection>
      </StyledSection>
    );
  }
}

export default Layout;
