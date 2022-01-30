import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMarkdown } from 'react-icons/fa';

export const FooterContainer = styled.div`
    background-color: #101522;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4rem 0 2rem;
`;

export const FooterSubscription = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #FFF;
    margin-bottom: 24px;
    padding: 24px;
`;

export const FooterSubHeading = styled.p`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 24px;
    margin-bottom: 24px;
`;

export const FooterSubText = styled.p`
    font-size: 20px;
    margin-bottom: 24px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`;

export const FormInput = styled.input`
    border: 1px solid #FFF;
    border-radius: 2px;
    outline: none;
    padding: 10px 20px;
    margin-right: 10px;
    font-size: 16px;

    &::placeholder {
        color: #242424;
    }

    @media screen and (max-width: 820px) {
        width: 90%;
        margin: 0 0 16px 0;
    }
`;

export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinksItems = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    width: 160px;
    margin: 16px;
    box-sizing: border-box;
    color: #FFF;

    @media screen and (max-width: 820px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    color: #FFF;

    &:hover {
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-self: start;
    text-decoration: none;
    font-size: 2rem;
    color: #FFF;
    margin-bottom: 16px;
    cursor: pointer;
`;

export const SocialIcon = styled(FaMarkdown)`
    margin-right: 10px;
`;

export const WebsiteRights = styled.small`
    color: #FFF;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #FFF;
    font-size: 24px;
`;