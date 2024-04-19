"use client";

import styled from "styled-components";
import { Bio } from "../data/constants";
import Typewriter from "typewriter-effect";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Count from "./Count";
import Particles from "./Particles";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const TitleName = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 40px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
export const Quote = styled.div`
  font-size: 16px;
  line-height: 32px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          {/* <HeroBgAnimation /> */}
          <Particles />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Count />
            <Title>Hey, This is</Title>
            <TitleName>{Bio.name}</TitleName>
            <TextLoop>
              I am
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <Quote>{`"${Bio.quote}" - Steve Jobs.`}</Quote>
            <SocialMediaIcons>
              <SocialMediaIcon href={Bio.facebook} target="display">
                <FacebookIcon sx={{ fontSize: "2rem" }} />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.twitter} target="display">
                <TwitterIcon sx={{ fontSize: "2rem" }} />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.linkedin} target="display">
                <LinkedInIcon sx={{ fontSize: "2rem" }} />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.insta} target="display">
                <InstagramIcon sx={{ fontSize: "2rem" }} />
              </SocialMediaIcon>
            </SocialMediaIcons>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon style={{ fontSize: 30 }} />}
                  href={Bio.github}
                  target="_blank"
                  sx={{
                    background:
                      "linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)",
                    color: "#FFFFFF",
                    borderRadius: "20px",
                    fontSize: "20px",
                    fontWeight: 600,
                    border: "none",
                    width: { xs: "100%" },
                    padding: "14px 0",
                    boxShadow:
                      "20px 20px 60px #1F2634, -20px -20px 60px #1F2634",
                    transition: "all 0.4s ease-in-out",
                    "&:hover": {
                      border: "none",
                      transform: "scale(1.02)",
                      boxShadow:
                        "20px 20px 60px #1F2634, -20px -20px 60px #1F2634",
                      filter: "brightness(1)",
                    },
                    mb: { xs: 2 },
                  }}
                >
                  github
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Button
                  variant="outlined"
                  endIcon={<DownloadRoundedIcon style={{ fontSize: 30 }} />}
                  href={Bio.resume}
                  target="_blank"
                  sx={{
                    background:
                      "linear-gradient(225deg,  hsla(294, 100%, 50%, 1) 0%,hsla(271, 100%, 50%, 1)  100%)",
                    color: "#FFFFFF",
                    borderRadius: "20px",
                    fontSize: "20px",
                    fontWeight: 600,
                    border: "none",
                    width: { xs: "100%" },
                    padding: "14px 0",
                    boxShadow:
                      "20px 20px 60px #1F2634, -20px -20px 60px #1F2634",
                    transition: "all 0.4s ease-in-out",
                    "&:hover": {
                      border: "none",
                      transform: "scale(1.02)",
                      boxShadow:
                        "20px 20px 60px #1F2634, -20px -20px 60px #1F2634",
                      filter: "brightness(1)",
                    },
                    mb: { xs: 2 },
                  }}
                >
                  Resume
                </Button>
              </Grid>
            </Grid>
          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            <Img src="/myself.jpg" alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
