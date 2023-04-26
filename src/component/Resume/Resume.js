import React, { useEffect, useState } from "react";

//css
import {
  ResumeWrapper,
  SideBarReusme,
  ContactInfoWrapper,
  ContactInfoHeader,
  ContactInfoContent,
  ResumeContainer,
  ResumeSection,
  ResumeSectionHeader,
  ResumeSectionContent,
  Container,
  ProjectContainer,
  ProjectTitle,
  ProjectDetails,
  ProjectSubtitle,
  ProjectDetail,
  ProjectLink,
  ImageContainer,
  AnimatedImage,
  AnimatedImage1,
  Wrapper,
} from "./Resume.css";

import { Button } from "@mui/material";
import PDF from "../../asstes/fypProject/19033572 Sandesh Shrestha - fyp.pdf";

function downloadPDF() {
  const link = document.createElement("a");
  link.href = PDF;
  link.download = "project_document.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export const Resume = () => {
  function downloadPDF() {
    const link = document.createElement("a");
    link.href = PDF;
    link.download = "project_document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <ResumeWrapper>
      <SideBarReusme>
        <ContactInfoWrapper>
          <ContactInfoHeader>Contact Information</ContactInfoHeader>
          <ContactInfoContent>
            <ul>
              <li>Phone: 9817943951</li>
              <li>Email: sandesh7xtha@gmail.com</li>
              <li>Language: English, Nepali</li>
            </ul>
          </ContactInfoContent>
        </ContactInfoWrapper>
        <ContactInfoWrapper>
          <ContactInfoHeader>Professional Skills</ContactInfoHeader>
          <ContactInfoContent>
            <ul>
              <li>Node.js</li>
              <li>React</li>
              <li>MySQL</li>
              <li>Redux</li>
              <li>Socket.io</li>

              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bash script programming</li>
              <li>Python programming languages</li>
            </ul>
          </ContactInfoContent>
        </ContactInfoWrapper>
        <ContactInfoWrapper>
          <ContactInfoHeader>Education</ContactInfoHeader>
          <ContactInfoContent>
            <ul>
              <li>Bachelor's Degree in Computing</li>
              <li>Itahari International College</li>
              <li>(2020-2022)</li>
            </ul>
          </ContactInfoContent>
        </ContactInfoWrapper>
        <ContactInfoWrapper>
          <ContactInfoHeader>Other Skills and Abilities</ContactInfoHeader>
          <ContactInfoContent>
            <ul>
              <li>Creative spirit</li>
              <li>Team player</li>
              <li>Dedicated</li>
              <li>Motivated</li>
            </ul>
          </ContactInfoContent>
        </ContactInfoWrapper>

        <ContactInfoWrapper>
          <ContactInfoHeader>Hobbies and Passion</ContactInfoHeader>
          <ContactInfoContent>
            <ul>
              <li>Musician</li>
              <li>Programming</li>

              <li>Football</li>
              <li>Drawing</li>
              <li>Playing games</li>
            </ul>
          </ContactInfoContent>
        </ContactInfoWrapper>
        <ContactInfoWrapper>
          <ContactInfoHeader>Language</ContactInfoHeader>
          <ContactInfoContent>
            <ul>
              <li>English</li>
              <li>Nepali</li>
            </ul>
          </ContactInfoContent>
        </ContactInfoWrapper>
      </SideBarReusme>

      <ResumeContainer>
        <ResumeSection>
          <ResumeSectionHeader>Career Objectives</ResumeSectionHeader>
          <ResumeSectionContent style={{ textAlign: "justify" }}>
            To work in a professional environment for the benefit of the
            organization and myself. Looking for a challenging work in a
            respectable organization where I can put my abilities to good use
            while also learning about new and developing trends in the IT
            industry.
          </ResumeSectionContent>
        </ResumeSection>

        <ResumeSection>
          <ResumeSectionHeader>Academic Projects</ResumeSectionHeader>
          <ResumeSectionContent>
            <Container>
              <ProjectTitle>
                Collage Final Year Project in Ecommerce Website
              </ProjectTitle>
              <ProjectContainer>
                <ProjectDetails>
                  <ProjectSubtitle>Technology Used:</ProjectSubtitle>
                  <ProjectDetail>
                    React, Node.js, MySQL & Khalti API
                  </ProjectDetail>
                  <ProjectSubtitle>Tools Used:</ProjectSubtitle>
                  <ProjectDetail>Xampp, VScode</ProjectDetail>
                  <ProjectSubtitle>Features:</ProjectSubtitle>
                  <ProjectDetail>
                    <li>Product sell and buy management</li>
                    <li>Online payment</li>
                    <li>Advertisement in newsfeeds</li>
                    <li>Comment and report system</li>
                    <li>Filter search bar</li>
                  </ProjectDetail>
                  <ProjectSubtitle>Github:</ProjectSubtitle>
                  <ProjectDetail>
                    <ProjectLink
                      target="_blank"
                      href="https://github.com/sandesh7xtha/666_music-user"
                    >
                      Frontend
                    </ProjectLink>
                    <ProjectLink
                      target="_blank"
                      href="https://github.com/sandesh7xtha/666_music-backend-API"
                    >
                      BackendAPI
                    </ProjectLink>
                    <ProjectLink
                      target="_blank"
                      href="https://github.com/sandesh7xtha/666_music-Dashboard"
                    >
                      Dashboard
                    </ProjectLink>
                  </ProjectDetail>
                </ProjectDetails>

                <Wrapper>
                  <ImageContainer>
                    <AnimatedImage />
                  </ImageContainer>
                  <Button onClick={downloadPDF} style={{ color: "black" }}>
                    Download full project document
                  </Button>
                </Wrapper>
              </ProjectContainer>
            </Container>
            <Container>
              <ProjectTitle>
                Conversation Kuraakhani Real Time Chat App
              </ProjectTitle>
              <ProjectContainer>
                <ProjectDetails>
                  <ProjectSubtitle>Technology Used:</ProjectSubtitle>
                  <ProjectDetail>
                    React, Node.js, MongoDB,Redux & socket.IO
                  </ProjectDetail>
                  <ProjectSubtitle>Tools Used:</ProjectSubtitle>
                  <ProjectDetail>MongoDB compass, VScode</ProjectDetail>
                  <ProjectSubtitle>Features:</ProjectSubtitle>
                  <ProjectDetail>
                    <li>Real Time Online Chat</li>
                    <li>Responsive</li>
                  </ProjectDetail>
                  <ProjectSubtitle>Github:</ProjectSubtitle>
                  <ProjectDetail>
                    <ProjectLink
                      href="https://github.com/sandesh7xtha/Conversation-RealTime-ChatApp"
                      target="_blank"
                    >
                      Frontend
                    </ProjectLink>
                    <ProjectLink
                      href="https://github.com/sandesh7xtha/Conversation-RealTime-ChatApp-API"
                      target="_blank"
                    >
                      BackendAPI
                    </ProjectLink>
                  </ProjectDetail>
                </ProjectDetails>
                <Wrapper>
                  <ImageContainer>
                    <AnimatedImage1 />
                  </ImageContainer>
                </Wrapper>
              </ProjectContainer>
            </Container>
          </ResumeSectionContent>
        </ResumeSection>
      </ResumeContainer>
    </ResumeWrapper>
  );
};
