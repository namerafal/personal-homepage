import styled from "styled-components";

export const List = styled.ul`
  max-width: fit-content;
  max-height: 48px;
  list-style: none;
  padding: 0;
  margin-top: 56px;
  margin-bottom: 0;
  display: flex;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 8px;
    gap: 16px;
    max-height: 32px;
  }
`;

export const Item = styled.li`
  display: flex;
`;

export const Link = styled.a`
  // color: ${({ theme }) => theme.colors.textPrimary};
  // transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: un;
  }
`;

export const styleLogo = (img) => styled(img)`
  max-width: 124px;
  max-height: 48px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 80px;
    max-height: auto;
  }
`;
