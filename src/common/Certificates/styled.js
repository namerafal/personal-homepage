import styled from 'styled-components';

export const List = styled.ul`   
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: grid;
    justify-content: space-evenly; 
    justify-items: center;    
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, 1fr);
   
    & > *:only-child {
        grid-template-columns: 1fr; 
        place-items: center;
    }

    /* Wyświetlanie dla dwóch lub więcej elementów */
    & > *:nth-child(n+2) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {        
        grid-auto-flow: row; /* Wymuszenie układu w jednej kolumnie */
        grid-template-columns: repeat(1, minmax(224px, 1fr));
    }
    
    & p { 
        grid-column: 1 / -1;
        text-align: center;
    }
`;

export const Item = styled.li`   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 478px;
    width: 100%;
    transition: transform 0.3s;

    &:hover {
       transform: scale(1.5);
    }

    img, video, iframe { 
        max-height: 100%;
        max-width: 100%;
        object-fit: contain; /* Zapewnienie proporcjonalnego dopasowania */
        transition: transform 0.3s, cursor 0.3s;       

        &.zoomed {
            transform: scale(1.5);             
        }
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        height: 336px;
        &::before {
            font-size: 1.2em;
            line-height: 0.7;
        }
    }
`;