import styled from "styled-components";

export const FooterWrapper = styled.footer`
  max-width: 691px;
  max-height: 282px;
  margin-top: 120px;
  padding: 0px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const EmailWrapper = styled.p`
  max-width: fit-content;
  font-size: 32px;
  font-weight: 900;
  padding: 0px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 24px 0px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
    margin: 12px 0px 12px;
  }
`;

export const Email = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  padding: 0px;
  margin: 0px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Emoticon = styled.img`
  position: absolute;
  padding-left: 5px;
`;

export const SocialAndBrandsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const RightsWrapper = styled.div`
  margin-top: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 28px;
  }
`;

export const RightsInfo = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  padding: 10px 0px;
  background: ${({ theme }) => theme.colors.rightsBackground};
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
  }
`;
