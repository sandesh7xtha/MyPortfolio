import styled from "styled-components";

//image of FYP Project
import image1 from "../../asstes/fypProject/1.jpg";
import image2 from "../../asstes/fypProject/2.jpg";
import image3 from "../../asstes/fypProject/3.jpg";
import image4 from "../../asstes/fypProject/4.jpg";
import image5 from "../../asstes/fypProject/5.png";
import image6 from "../../asstes/fypProject/6.png";
import image7 from "../../asstes/fypProject/7.jpg";

//image of Chat APP
import imageA from "../../asstes/ChatAppConversaion/a.png";
import imageB from "../../asstes/ChatAppConversaion/b.png";
import imageC from "../../asstes/ChatAppConversaion/c.png";

import GifD from "../../asstes/ChatAppConversaion/d.gif";

export const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: #f1f1f1;
`;

export const SideBarReusme = styled.div`
  //   top: 80px;
  //   padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 60rem;
`;

export const ContactInfoWrapper = styled.div`
  text-align: left !important;
  padding-left: 1rem;
`;

export const ContactInfoHeader = styled.h2`
  font-size: 1.5rem;
  color: #333333;
`;

export const ContactInfoContent = styled.p`
  font-size: 1.2rem;
  color: #666666;
  text-align: left;
`;

export const ResumeContainer = styled.div`
  margin: 1rem;
`;

export const ResumeSection = styled.div`
  // margin-bottom: 20px;
`;

export const ResumeSectionHeader = styled.h2`
  font-size: 1.5rem;
  // margin-bottom: 10px;
  color: #333333;
`;

export const ResumeSectionContent = styled.p`
  font-size: 1.2rem;
  color: #666666;
  text-align: left;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  // margin-bottom: 20px;
  // padding: 20px;
`;

export const ProjectTitle = styled.h3`
  color: #333;
  font-size: 24px;
  font-weight: 700;
  // margin-bottom: 10px;
`;

export const ProjectDetails = styled.div`
  // margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 29%;
`;

export const ProjectSubtitle = styled.h4`
  color: #777;
  font-size: 18px;
  font-weight: 700;
  // margin-bottom: 5px;
`;

export const ProjectDetail = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 1rem;

  // margin-bottom: 5px;
`;

export const ProjectLink = styled.a`
  color: #777;
  font-size: 16px;
  font-weight: 400;
  margin-right: 1rem;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  /* add this */
  cursor: pointer;
`;
export const ImageContainer = styled.div`
  width: 31rem;
  height: 20rem;
  margin-left: 1rem;
  position: relative;
`;

export const AnimatedImage = styled.div`
  width: 100%;
  height: 90%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: 1px solid #ddd;
  animation: fade 30s linear infinite, shadow 2s ease-in-out infinite alternate;

  @keyframes shadow {
    0% {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    100% {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    }
  }
  // Image animation
  @keyframes fade {
    0% {
      background-image: url(${image1});
    }
    10%,
    14.28% {
      background-image: url(${image2});
    }
    18.56%,
    28.56% {
      background-image: url(${image3});
    }
    32.84%,
    42.84% {
      background-image: url(${image4});
    }
    47.12%,
    57.12% {
      background-image: url(${image5});
    }
    61.4%,
    71.4% {
      background-image: url(${image6});
    }
    75.68%,
    85.68% {
      background-image: url(${image7});
    }
    89.96%,
    100% {
      background-image: url(${image1});
    }
  }
`;

export const AnimatedImage1 = styled.div`
  width: 100%;
  height: 90%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: 1px solid #ddd;
  animation: fade1 30s linear infinite, shadow 2s ease-in-out infinite alternate;

  @keyframes shadow {
    0% {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    100% {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    }
  }
  // Image animation
  @keyframes fade1 {
    0%,
    25% {
      background-image: url(${imageA});
    }
    28.33%,
    53.33% {
      background-image: url(${GifD});
    }
    56.66%,
    81.66% {
      background-image: url(${imageB});
    }
    85%,
    100% {
      background-image: url(${imageC});
    }
  }
`;
