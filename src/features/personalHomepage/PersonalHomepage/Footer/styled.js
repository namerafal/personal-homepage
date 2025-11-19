import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    max-width: 691px;
    max-height: 282px;
    margin-top: 120px;
    padding: 0px;
    text-align: left;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
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

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
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

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 14px;        
    }
`;

export const Emoticon = styled.img`
    position: absolute;
    padding-left: 5px;
`;