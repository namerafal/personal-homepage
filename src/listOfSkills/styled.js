import styled from 'styled-components';

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, minmax(314px, 1fr));
    grid-row-gap: 8px;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {        
        grid-template-columns: repeat(1, minmax(238px, 1fr));
    }
`;

export const ListItem = styled.li`
    max-height: fit-content;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 24px;   

    &::before {
        content: '•';
        font-size: 1.5em;
        line-height: 0.9;
        position: absolute;
        left: 0;
        top: 0;
        color: ${({ theme }) => theme.colors.primary}; 
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        &::before {
            font-size: 1.2em;
            line-height: 0.7;
        }
    }
`;