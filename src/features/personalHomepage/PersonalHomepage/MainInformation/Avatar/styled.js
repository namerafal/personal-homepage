import styled from "styled-components";

export const Wrapper = styled.div`
    width: 30vw;
    height: 30vw;
    max-width: 384px;
    max-height: 384px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background-color: #ccccccb0;
`;

export const Picture = styled.img`
    position: absolute;
    margin-top: 11px;   
    left: 2vw;
    top: -1vh;
    width: 78%;
    height: 141%;
    object-fit: cover;
    filter: brightness(1.05); 
`;