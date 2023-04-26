import React from "react";
import styled from "styled-components";
import ComputerIcon from "@mui/icons-material/Computer";
import Button from "@mui/material/Button";
import rasumePDF from "../../asstes/SANDESH SHRESTHA.pdf";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const ContentInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0rem 1rem;
  margin: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    // margin: 0rem;
  }
`;

const Content = styled.div`
  // text-align: left;
  text-align: justify;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-right: 1rem;
  @media (max-width: 768px) {
    margin-right: 0rem;
  }
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
  // margin-right: 2rem;

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
  @media (max-width: 768px) {
    // flex-direction: column;
  }
`;

const AboutMe = () => {
  function downloadResumePDF() {
    const link = document.createElement("a");
    link.href = rasumePDF;
    link.download = "Resume_sandesh_shrestha.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <Wrapper>
      <ContentInfoWrapper>
        <Content>
          <Title>About Me</Title>
          <Paragraph>
            Hello, my name is Sandesh Shrestha and I am a motivated and
            dedicated web development intern with a particular interest in
            React.js and Node.js. As a recent graduate with a BSc. (Hons) in
            Computing, I am eager to apply my knowledge and skills in a
            professional setting. <br />
            <br />
            In terms of my professional skills, I am proficient in Node.js,
            React, MySQL, Redux, Socket.io, HTML, CSS, and JavaScript.
            Additionally, I have experience in Bash script programming and
            Python programming languages. As a creative team player, I am always
            looking to improve my skills and take on new challenges. <br />
            <br />I am able to effectively communicate in both English and
            Nepali, my professional objective is to work in a challenging and
            rewarding environment where I can contribute to the success of the
            organization while staying up to date with the latest trends in the
            IT industry. I have completed a Bachelor's degree in Computing from
            Itahari International College and Intermediate in Management from
            Suryodaya English Higher Secondary School.
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
            <StyledButton onClick={downloadResumePDF} variant="contained">
              Download My Resume
            </StyledButton>{" "}
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
            I can create attractive, responsive websites that provide excellent
            user experience. I have expertise in front-end development, back-end
            programming, and database management.
          </ServiceDescription>
        </ServiceWrapper>
      </ServiceSection>
    </Wrapper>
  );
};

export default AboutMe;
const ServiceSection = styled.div`
  // background-color: pink;
  // padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ServiceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0rem 1rem;
  }
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
