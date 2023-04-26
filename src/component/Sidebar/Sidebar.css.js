import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 240px;
  height: 100%;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-194px")};
  z-index: 999;
  background-color: #fff;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;0.1);
  @media (max-width: 768px) {
    background-color:${({ isOpen }) =>
      isOpen ? "#fff" : "rgba(255, 255, 255, 0)"};


  }
  
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0px 16px;
  border-bottom: 1px solid #ddd;
  font-weight: 600;
  font-size: 18px;
  @media (max-width: 768px) {
    padding: 0px 8px;
    height: 56px;
    font-size: 16px;
  }
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 16px;
  border-bottom: 1px solid #ddd;
  font-weight: 600;
  font-size: 18px;
`;

export const ProfileImage = styled.img`
  width: 170px;
  // height: 120px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ListItemIconWrapper = styled.div`
  margin-right: 8px;
  color: #888;
`;

export const ListItemTextPrimary = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
export const SidebarDivider = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #ddd;
`;
