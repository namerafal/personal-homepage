import styled from "styled-components";

export const SectionCommon = styled.section`
  margin: 72px 0 0 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    margin: 48px 0 0 0;
  }
`;