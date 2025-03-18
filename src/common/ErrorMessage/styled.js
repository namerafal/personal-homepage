import styled from "styled-components";
import { ReactComponent as Icon } from "../../images/error.svg";
import { ButtonLink } from "../../features/personalHomepage/PersonalHomepage/ButtonLink";

export const Wrapper = styled.div`   
    margin: 88px auto 0px;
    max-width: 426px;
    max-height: 263px;
    text-align: center;   
    color: ${({ theme }) => theme.colors.textPrimary};
    
        @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
          margin-top: 50px;
        }
`;

export const HeaderError = styled.h3`
    font-size: 24px;   
    margin: 0 0 24px;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 1.4;
    margin: 32px 0px 32px;
`;

export const ErrorIcon = styled(Icon)`
  margin-bottom: 24px;
  max-height: 33.34px;
  max-width: 37px; 
`;

export const StyledButton = styled(ButtonLink)`    
    display: inline-flex;
    align-items: center;    
`;