import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  margin-top: 64px;
  overflow-wrap: anywhere;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 94px);
 
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 21px 14px 0px 14px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileMax + 1}px) and (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin: 28px 22px 0px 22px;
  }
`

export const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonLink.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colors.site.text};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.ironTransparent};
  }
`