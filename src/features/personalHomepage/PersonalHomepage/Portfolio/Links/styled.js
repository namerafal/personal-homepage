import styled from "styled-components";

export const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0px;
  }
`;

export const Link = styled.div`
    font-size: 18px;
    line-height: 1.4;
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;   
`;

export const LinkName = styled.p` 
    margin: 0px;   
    color: ${({ theme }) => theme.colors.textSecondary};
    white-space: nowrap; 
`;

export const LinkUrl = styled.a`    
    color: ${({ theme }) => theme.colors.primary};
    text-underline-offset: 5px;
    text-decoration-thickness: 2px;
    text-decoration-color: ${({ theme }) => theme.colors.underlineLink};


    &:hover {
      text-decoration-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.textSecondary};
    }
`;

export const NA = styled.span`
    color: ${({ theme }) => theme.colors.textSecondary}; /* Kolor dla "N/A" */
    font-style: italic; 
    opacity: 0.7;
`;
