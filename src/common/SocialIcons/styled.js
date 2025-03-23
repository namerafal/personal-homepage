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

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin-top: 40px;
        gap: 16px;
        max-height: 32px;
    }
`;

export const Item = styled.li`
    display: flex;    
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: color 0.3s;

    &:hover{
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const styleIcon = Icon => styled(Icon)`
    max-width: 48px;
    max-height: 48px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        max-width: 32px;
        max-height: fit-content;
    }
`;