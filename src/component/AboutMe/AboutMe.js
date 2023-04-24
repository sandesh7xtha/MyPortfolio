import React from "react";
import styled from "styled-components";
import ComputerIcon from "@mui/icons-material/Computer";
import Button from "@mui/material/Button";

const Wrapper = styled.div`
  // background-color: #f5f5f5;
  // background-color: pink;

  height: 100vh;
`;

const ContentInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  //   align-items: center;
  // justify-content: center;
  // background-color: #f5f5f5;
  // margin-left: 10rem;
  padding: 0rem 1rem;
  // border-bottom: 1px solid #ccc;
  // height: 100vh;
  margin: 2rem;
`;

const Content = styled.div`
  // text-align: left;
  text-align: justify;
  margin-right: 1rem;

  // background-color: blue;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // background-color: pink;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  div {
    padding: 0.5rem 0rem;
  }
`;

const InfoTitle = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const InfoContent = styled.span`
  font-size: 1.2rem;
  color: #555;
  margin-left: 0.5rem;
`;
const StyledButton = styled.button`
  background-color: #ffffff;
  border: 2px solid #000000;
  color: #000000;
  text-transform: uppercase;
  padding: 0.8em 1.6em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  border-radius: 0.3em;
  cursor: pointer;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.8);
  }

  &:disabled {
    background-color: #a3a3a3;
    color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const AboutMe = () => {
  return (
    <Wrapper>
      <ContentInfoWrapper>
        <Content>
          <Title>About Me</Title>
          <Paragraph>
            Hi there! My name is Sandesh Sherestha, and I am a passionate web
            developer with over 5 years of experience creating innovative and
            successful websites. My primary focus is to create high-quality,
            responsive websites that deliver a great user experience. I
            specialize in front-end development, but I am also skilled in
            back-end programming and database management.
          </Paragraph>
        </Content>
        <InfoSection>
          <Info>
            <SectionTitle>Personal Information</SectionTitle>
            <div>
              <InfoTitle>Name:</InfoTitle>
              <InfoContent>Sandesh Sherestha</InfoContent>
            </div>
            <div>
              <InfoTitle>Age:</InfoTitle>
              <InfoContent>23 years old</InfoContent>
            </div>
            <div>
              <InfoTitle>Address:</InfoTitle>
              <InfoContent>Damak, Jhapa, Nepal</InfoContent>
            </div>
            <div>
              <InfoTitle>Email:</InfoTitle>
              <InfoContent>sandesh7xtha@gmail.com</InfoContent>
            </div>
            <div>
              <InfoTitle>Phone:</InfoTitle>
              <InfoContent>+977 9817943951</InfoContent>
            </div>
            <StyledButton variant="contained">Download My Resume</StyledButton>{" "}
          </Info>
        </InfoSection>
      </ContentInfoWrapper>
      <ServiceSection>
        <Title>Service</Title>
        <ServiceWrapper>
          <ComputerIcon
            style={{ fontSize: "80px", margin: "2rem" }}
          ></ComputerIcon>
          <ServiceTitle>Web Developer</ServiceTitle>
          <ServiceDescription>
            I specialize in creating high-quality, responsive websites that
            deliver a great user experience. I am skilled in front-end
            development, back-end programming, and database management.
          </ServiceDescription>
        </ServiceWrapper>
      </ServiceSection>
    </Wrapper>
  );
};

export default AboutMe;
const ServiceSection = styled.div`
  // background-color: pink;
  padding-top: 2rem;
`;
const ServiceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2rem;
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  // background-color: pink;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  // margin: 2rem;
  border-radius: 5px;
`;
