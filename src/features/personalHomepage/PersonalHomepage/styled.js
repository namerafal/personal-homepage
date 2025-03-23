import styled from "styled-components";

const MainWrapper = styled.div`
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
export default MainWrapper;