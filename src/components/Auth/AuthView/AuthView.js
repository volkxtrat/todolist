import React from "react";
import styled from "styled-components";
import { Header, Icon, Container } from "semantic-ui-react";

const SyledWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  min-width: 600px;
  max-width: 600px;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    min-width: 400px;
  }
`;

const StyledAuth = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100vh;
  background: #f6f6f6;
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  padding: 15% 0;
`;

function AuthView({ children }) {
  return (
    <StyledAuth>
      <SyledWrapper>
        <Container fluid>
          <StyledIcon>
            <Header as="h1" icon textAlign="center">
              <Icon name="check" />
            </Header>
          </StyledIcon>
          <StyledBlock>{children}</StyledBlock>
        </Container>
      </SyledWrapper>
    </StyledAuth>
  );
}

export default AuthView;
