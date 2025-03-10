import styled, { css } from 'styled-components';
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
  display: flex;  
  justify-content: flex-end; 
  margin-bottom: -30px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  outline-offset: 8px;
  cursor: pointer;
`;

export const Text = styled.span`
  margin-right: 12px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const IconSpace = styled.span`
  display: flex;
  width: 48px;
  border: 1px solid;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.themeSwitch.background};
  padding: 3px;
`;

export const IconWrapper = styled.span`
  display: flex;
  border-radius: 50%;
  padding: 3px;
  background: currentColor;
  transition: transform 0.3s;

  ${({ $moveToRight }) => $moveToRight && css`
    transform: translateX(20px);
  `};
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;