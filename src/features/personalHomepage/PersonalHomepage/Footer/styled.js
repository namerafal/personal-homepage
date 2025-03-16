import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.footerBackground};
    text-align: center;
`;

export const Email = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 8px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;

    a img {
        width: 24px;
        height: 24px;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.1);
        }
    }
`;