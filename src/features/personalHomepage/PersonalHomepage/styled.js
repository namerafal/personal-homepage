import styled from "styled-components";

const MainWrapper = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  overflow-wrap: anywhere;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 94px);
 
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    min-height: calc(100vh - 142px);
  }
`
export default MainWrapper;