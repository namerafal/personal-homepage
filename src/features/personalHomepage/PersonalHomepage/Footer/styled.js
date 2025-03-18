import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    max-width: 691px;
    max-height: 282px;
    margin-top: 120px;
    padding: 0px;
    text-align: left;
`;

export const Email = styled.p`
    max-width: fit-content;
    font-size: 32px;
    font-weight: 900;
    padding: 0px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 24px 0px 24px;
`;

export const Description = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    padding: 0px;
    margin: 0px;
    color: ${({ theme }) => theme.colors.textPrimary};
`;