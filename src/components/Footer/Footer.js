import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialIcon } from "./Footer.elements";
import { Brand, Button } from "../../globalStyles";

const Footer  = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig> Subscribe </Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                        <FooterLink to="/"> Testimonials </FooterLink>
                        <FooterLink to="/"> Careers </FooterLink>
                        <FooterLink to="/"> Investors </FooterLink>
                        <FooterLink to="/"> Terms of Services </FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle> Contact Us </FooterLinkTitle>
                        <FooterLink to="/"> Contact </FooterLink>
                        <FooterLink to="/"> Support </FooterLink>
                        <FooterLink to="/"> Destinations </FooterLink>
                        <FooterLink to="/"> Sponsorships </FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle> Videos </FooterLinkTitle>
                        <FooterLink to="/"> Submit Video </FooterLink>
                        <FooterLink to="/"> Ambassadors </FooterLink>
                        <FooterLink to="/"> Agency </FooterLink>
                        <FooterLink to="/"> Influencer </FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle> Social Media </FooterLinkTitle>
                        <FooterLink to="/"> Instagram </FooterLink>
                        <FooterLink to="/"> Facebook </FooterLink>
                        <FooterLink to="/"> Youtube </FooterLink>
                        <FooterLink to="/"> Twitter </FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        <Brand> MARKDOWN </Brand>
                    </SocialLogo>
                    <WebsiteRights>
                        MARKDOWN &copy; 2022
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink>
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}
export default Footer;