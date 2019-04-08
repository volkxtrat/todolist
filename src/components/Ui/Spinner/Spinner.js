import React from "react";
import {
  StyledWrapper,
  StyledSpinner,
  StyledRect,
  StyledRect2,
  StyledRect3,
  StyledRect4,
  StyledRect5
} from "./styled";

export default function Spinner() {
  return (
    <StyledWrapper>
      <StyledSpinner>
        <StyledRect theme={{ color: "primary" }} />
        <StyledRect2 theme={{ color: "primary" }} />
        <StyledRect3 theme={{ color: "primary" }} />
        <StyledRect4 theme={{ color: "primary" }} />
        <StyledRect5 theme={{ color: "primary" }} />
      </StyledSpinner>
    </StyledWrapper>
  );
}
