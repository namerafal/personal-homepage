import styled from "styled-components";

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

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 56px;
    margin-bottom: 0;    
    display: flex;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin-top: 40px;
    }
`;

export const Item = styled.li`
    &:not(:last-child){
        margin-right: 24px;       

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
            margin-right: 16px;
        }
    }
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: color 0.3s;

    &:hover{
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const styleIcon = Icon => styled(Icon)`
    height: auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        height: 32px;
    }
`;