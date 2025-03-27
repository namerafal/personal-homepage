import styled from 'styled-components';

export const TitleWrapper = styled.header`
  text-align: center;
  margin-bottom: 24px;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  font-size: 30px;
  line-height: 1;
  font-weight: 900;
  color: ${({theme}) => theme.colors.textPrimary};
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  line-height: 2;
  margin: 8px 0px 0px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;