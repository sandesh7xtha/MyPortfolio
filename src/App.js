import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import AboutMe from "./component/AboutMe/AboutMe";
import { Home } from "./component/Home/Home";
import { Resume } from "./component/Resume/Resume";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  const [scrollData, setScrollData] = useState("");
  const [sidebarSlide, setSidebarSlide] = useState(true);
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    switch (scrollData) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "aboutMe":
        aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "resume":
        resumeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }, [scrollData]);

  return (
    <div className="App">
      <Sidebar
        setScrollData={setScrollData}
        setSidebarSlide={setSidebarSlide}
      />

      <MainDiv
      // style={{
      //   marginLeft: sidebarSlide ? "15rem" : "3rem",
      //   transition: "all 0.3s ease-in-out",
      // }}
      >
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div ref={resumeRef}>
          <Resume />
        </div>
      </MainDiv>
    </div>
  );
}

export default App;

const MainDiv = styled.div`
  margin-left: ${(props) => (props.sidebarSlide ? "15rem" : "3rem")};
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin-left: 0rem;
    // margin-left: ${(props) => (props.sidebarSlide ? "15rem" : "3rem")};
  }
`;
