import styled from "styled-components";

export const ButtonLink = styled.a`
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

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 18px;
    }
`;