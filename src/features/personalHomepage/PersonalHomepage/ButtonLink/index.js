import styled from "styled-components";

export const ButtonLink = styled.a`
    max-width: fit-content;
    max-height: 49px;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    padding: 12px 16px;
    border: 3px solid ${({ theme }) => theme.colors.buttonLink.border};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    color: ${({ theme }) => theme.colors.buttonLink.text};
    background-color: ${({ theme }) => theme.colors.primary};
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};
    }

    &:active {
        transform: scale(0.95);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 18px;
        max-height: 46px;
    }
`;