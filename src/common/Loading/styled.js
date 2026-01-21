import styled from "styled-components";
import { ReactComponent as Icon } from "../../images/spinner.svg";

export const LoadingWrapper = styled.div`  
  text-align: center;
  margin-top: 88px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 50px;
  }
`;

export const LoadingMessage = styled.p`
  font-size: 20px;
  line-height: 2;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const LoadingIcon = styled(Icon)`
  margin: 48px;
  max-height: 160px;
  max-width: 160px;
  height: 30vw;
  width: 30vw;
  animation: 1s linear normal infinite rotation;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }  
`;
