import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 32px;
    margin: 0px;
    width: 100%;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};

    background: ${({ theme }) => theme.colors.tileBackground};
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin: 0px;
    padding-bottom: 16px;
    color: ${({ theme }) => theme.colors.textPrimary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};    

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
        padding-bottom: 12px;
    }
`;

export const Content = styled.div`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    padding: 0px;
    margin-top: 32px;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        line-height: 1;
        margin-top: 12px;
    }
`;

export const HeaderEmoticon = styled.img`
    height: clamp(18px, 3vw, 27px);
    width: auto;
    position: relative;
    top: 3px;
    left: 16px;
   

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        height: clamp(10px, 5vw, 18px); 
        left: 12px;
    }
`;