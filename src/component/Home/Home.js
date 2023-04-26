import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import videoFile from "../../asstes/mix.mp4";

const HomeWrapper = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: blur(5px);
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
const pulse2 = keyframes`
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  font-family: "Helvetica Neue", cursive, sans-serif;
  text-align: center;
  margin-bottom: 16px;
  animation: ${fadeIn} 5s ease-in-out, ${pulse} 2s ease-in-out infinite;
`;

const Subtitle = styled.p`
  color: #fff;
  font-size: 24px;
  text-align: center;
  font-family: "Helvetica Neue", cursive, sans-serif;

  animation: ${fadeIn} 5s ease-in-out, ${pulse2} 2s ease-in-out infinite;
`;

export const Home = () => {
  return (
    <HomeWrapper>
      <VideoBackground autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </VideoBackground>
      <div>
        <Title>Welcome to Sandesh Shrestha</Title>
        <Subtitle>I am Web Developer</Subtitle>
      </div>
    </HomeWrapper>
  );
};
