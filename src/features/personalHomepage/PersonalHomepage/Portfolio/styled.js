import styled from 'styled-components';

export const RepoList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(288px, 49%, 592px), 1fr)); 
  grid-auto-rows: auto;
  gap: 16px;
`;

export const RepoTile = styled.div` 
  height: clamp(230px, 33vw, 332px);
  padding: 16px;  
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  background-color: ${({ theme }) => theme.colors.tileBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: border-color 0.3s;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    height: fit-content;
  }

  h3 {
    margin: 0 0 8px;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    text-transform: capitalize;
    color:${({ theme }) => theme.colors.primary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.tile.borderHover};
  }
`;
