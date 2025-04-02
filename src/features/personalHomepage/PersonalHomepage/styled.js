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
  background-color: ${({ theme }) => theme.colors.toggleButton.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colors.site.text};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: background-color 0.1s, transform 0.1s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.toggleButton.hoverColor};
  }

  &:active {    
    box-shadow: ${({ theme }) => theme.colors.toggleButton.activeShadow};
    transform: perspective(650px) rotateX(-9deg);
  }

  & > span {
    display: inline-block;
    transition: transform 0.1s ease-in-out;
  }

  &:active > span {
    transform: perspective(150px) rotateX(-10deg);
  }
`
export const TitleWithEmoticon = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    & > span {
        white-space: nowrap;
        padding-left: 4px;
        padding-bottom: 2px;
    }
`;

export const Emoticon = styled.img`
    margin-left: 8px;
    height: 1em;
    width: auto;
`;