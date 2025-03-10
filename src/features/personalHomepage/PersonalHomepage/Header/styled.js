import styled from 'styled-components';

export const TitleWrapper = styled.header`
  text-align: center;
  margin-bottom: 24px;
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  font-size: 30px;
  line-height: 1;
  color: ${({theme}) => theme.colors.textPrimary};
  margin: 8px 0;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;