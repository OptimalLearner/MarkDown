import styled from "styled-components";

export const InfoSec  = styled.div`
    background: ${({lightBg}) => (lightBg) ? '#FFF' : '#101522'};
    color: #FFF;
    padding: 120px 0;
`;

export const InfoRow = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -15px -15px -15px;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
    flex: 1;
    flex-basis: 50%;
    margin-bottom: 15px;
    padding-left: 15px;
    padding: right: 15px;
    max-width: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        display: flex;
        justify-content: center;
        flex-basis: 100%;
    }
`;

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 60px;
    max-width: 540px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4b59f7')};
    letter-spacing: 1.5px;
    font-size: 18px;
    line-height: 1rem;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    color: ${({lightText}) => (lightText ? '#F7F8FA' : '#1c2237')};
    font-size: 48px;
    margin-bottom: 24px;
`;

export const SubTitle = styled.p`
    color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#4b59f7')};
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 35px;
    max-width: 440px;
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
    max-width: 100%;
    max-height: 500px;
    display: inline-block;
    border: 0;
    vertical-align: middle;
    padding-right: 0;
`;