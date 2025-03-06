import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "../ButtonLink/envelope.svg";
import { ButtonLink } from "../ButtonLink";

export const Wrapper = styled.header`
  max-width: 1089px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  grid-gap: 64px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px){
    grid-gap: 32px;
  }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`;

export const Picture = styled.img`
  width: 30vw;
  max-width: 384px;
  max-height: 384px;
  border-radius: 50%;
  
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        /* width: 132px; */
        /* width: 128px; */
        height: 30vw;
    }
`;

export const ThisIs = styled.div`
    font-size: 12px;
    font-weight: bold;
    letter-spacing: initial;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 12px 0 0 0;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 22px;
        margin-top: 8px;
    }
`;

export const ShortDescription = styled.p`
    font-size: 20px;
    line-height: 1.4;
    margin: 36px 0 0 0;
    max-width: 650px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
       font-size: 16px;
       max-width: 570px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px){
        margin-top: 16px;
    }
`;

export const StyledButtonLink = styled(ButtonLink)`
    margin-top: 32px;
    display: inline-flex;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin-top: 24px;
    }
`;

export const ButtonIcon = styled(EnvelopeIcon)`
    margin-right: 16px;
`;

export const Icon = styled.img`
    vertical-align: text-top;
    margin-right: 4px;
`;
