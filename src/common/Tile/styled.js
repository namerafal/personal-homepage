import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 0px 10px 20px 10px;
    width: 100%;

    background: ${({ theme }) => theme.colors.tileBackground};
`;