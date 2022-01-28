import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, SubTitle, ImgWrapper, Img } from "./InfoSection.elements";

const InfoSection = ({ lightBg, imgStart, lightTopLine, lightText, lightTextDesc, topLine, headline, description, buttonLabel, primary, img, alt, start }) => {
    return (
        <div>
            <InfoSec lightBg={lightBg} >
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}> {topLine} </TopLine>
                                <Heading lightText={lightText}> {headline} </Heading>
                                <SubTitle lightTextDesc={lightTextDesc}> {description} </SubTitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary={primary}> {buttonLabel} </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </div>
    )
}

export default InfoSection;