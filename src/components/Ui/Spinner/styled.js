import styled, { keyframes } from "styled-components";

// http://tobiasahlin.com
export const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 150px;
`;

export const stretchDelay = keyframes`
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
    }
`;

export const StyledRect = styled.div`
  background: #212121;
  height: 100%;
  display: flex;
  flex: 1;

  animation: ${stretchDelay} 1.2s infinite ease-in-out;
  &:not(:last-child) {
    margin-right: 0.25rem;
  }
`;

export const StyledRect2 = styled(StyledRect)`
  animation-delay: -1.1s;
`;
export const StyledRect3 = styled(StyledRect)`
  animation-delay: -1s;
`;
export const StyledRect4 = styled(StyledRect)`
  animation-delay: -0.9s;
`;
export const StyledRect5 = styled(StyledRect)`
  animation-delay: -0.8s;
`;
