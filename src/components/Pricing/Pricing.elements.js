import styled from "styled-components";
import { Link } from "react-router-dom";

export const PricingSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #4b59f7;
    padding: 50px 0 60px;
`;

export const PricingWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    @media screen and (max-width: 960px) {
        margin: 0 30px;
    }
`;

export const PricingHeading = styled.h1`
    color: #FFF;
    font-size: 48px;
    margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const PricingCard = styled(Link)`
    background: #242424;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
    width: 280px;
    height: 500px;
    text-decoration: none;
    border-radius: 5px;

    &:nth-child(2) {
        margin: 24px 36px;
    }

    &:hover {
        transform: scale(1.1);
        transition: all 0.5s ease-out;
        color: #1c2237;
    }

    @media screen and (max-width: 960px) {
        width: 90%;
        &:hover {
        transform: none;
        }
    }
`;

export const PricingCardInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 500px;
    padding: 24px;
    color: #FFF;
`;

export const PricingCardIcon = styled.div`
    margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
    margin-bottom: 16px;
    font-size: 24px;
`;

export const PricingCardCost = styled.h4`
    font-size: 40px;
`;

export const PricingCardLength = styled.p`
    font-size: 14px;
    margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul`
    list-style: none;
    color: #a9b3c1;
    margin: 16px 0 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PricingCardFeature = styled.li`
    margin-bottom: 10px;
`;