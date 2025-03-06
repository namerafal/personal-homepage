import styled from 'styled-components';

export const SectionWrapper = styled.section`
  margin: 20px 0;
`;

export const TitleWrapper = styled.header`
  text-align: center;
  margin-bottom: 16px;
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto;
  fill: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 8px 0;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const RepoList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

export const RepoTile = styled.div`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.tile.border};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  background-color: ${({ theme }) => theme.colors.tileBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};

  h3 {
    margin: 0 0 8px;
    font-size: 18px;
  }

  p {
    margin: 0 0 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  a {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
