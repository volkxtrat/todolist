import React from "react";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 65px;
  border-bottom: 1px solid var(--c-divider);
`;

export default function Header() {
  return (
    <StyledHeader>
      <Divider />
    </StyledHeader>
  );
}
