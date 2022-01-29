import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }
    body {
        overflow-x: hidden;
    }
`;

export const Brand = styled.span`
    font-family: 'Mochiy Pop P One', sans-serif;
    font-size: 22px;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    z-index: 1;
    margin: auto;
    padding-left: 50px;
    padding-right: 50px;

    @media screen and (max-width: 990px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`;

export const Button = styled.button`
    background: ${({primary}) => (primary ? '#4b59f7' : '#0467fb') };
    color: #FFF;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    padding: ${({big}) => (big) ? '12px 64px' : '10px 20px'};
    cursor: pointer;

    &:hover {
        background: #FFF;
        background: ${({primary}) => (primary ? '#0467fb' : '#4b59f7')};
        transition: all 0.3s ease-out;
    }

    @media screen and (max-width: 960px) {
        width: 90%;
    }
`;

export default GlobalStyle;