import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarContent,
  ProfileImage,
  ListItemWrapper,
  ListItemIconWrapper,
  ListItemTextPrimary,
  SidebarDivider,
  ImageContent,
} from "./Sidebar.css";

import img from "../../asstes/94604439873 (2).png";
function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenuIcon = () => {
    setIsOpen(!isOpen);
    props.setSidebarSlide(!isOpen);
  };

  const handleHomeClick = () => {
    // handle Home click
    props.setScrollData("home");
  };

  const handleAboutMeClick = () => {
    props.setScrollData("aboutMe");
  };

  const handleResumeClick = () => {
    props.setScrollData("resume");
  };

  const handleContactClick = () => {
    // handle Contact click
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>
        <div>My Portfolio</div>
        <MenuIcon
          style={{
            fontSize: "1.5rem",
            "@media(max-width: 768px)": {
              fontSize: "1rem",
            },
          }}
          onClick={handleMenuIcon}
        />
      </SidebarHeader>

      <SidebarContent>
        <ImageContent>
          <ProfileImage src={img} alt="Profile Image" />
          <div>Sandesh Shrestha</div>
        </ImageContent>
        <div>
          <ListItemWrapper onClick={handleHomeClick}>
            <ListItemIconWrapper>
              <HomeIcon />
            </ListItemIconWrapper>
            <ListItemTextPrimary>Home</ListItemTextPrimary>
          </ListItemWrapper>
          <ListItemWrapper onClick={handleAboutMeClick}>
            <ListItemIconWrapper>
              <InfoIcon />
            </ListItemIconWrapper>
            <ListItemTextPrimary>About Me</ListItemTextPrimary>
          </ListItemWrapper>
          <SidebarDivider />
          <ListItemWrapper onClick={handleResumeClick}>
            <ListItemIconWrapper>
              <WorkIcon />
            </ListItemIconWrapper>
            <ListItemTextPrimary>Resume</ListItemTextPrimary>
          </ListItemWrapper>
          {/* <ListItemWrapper onClick={handleContactClick}>
            <ListItemIconWrapper>
              <EmailIcon />
            </ListItemIconWrapper>
            <ListItemTextPrimary>Contact</ListItemTextPrimary>
          </ListItemWrapper> */}
        </div>
      </SidebarContent>
    </SidebarContainer>
  );
}

export default Sidebar;
