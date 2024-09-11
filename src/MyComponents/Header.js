import { useState } from "react";
import styled from "styled-components";

const HeaderWrap = styled.div``;

const SubWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 600px;

  @media screen and (max-width: 767px) {
    gap: 120px;
  }
`;
const ProfileNameLogoWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 50px 75px;
  background: radial-gradient(
    circle at 22% 30%,
    #34167d 0%,
    rgba(0, 0, 0, 0) 59.077759%
  );

  @media screen and (max-width: 767px) {
    margin-left: -60px;
  }
`;

const ProfileLogo = styled.img`
  height: 44px;
  width: 44px;
`;
const ProfileName = styled.div`
  color: rgb(240, 244, 255);
  font-size: 18px;
`;

const MenuWrap = styled.div`
  display: flex;
  gap: 80px;
  font-size: 20px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Menu1 = styled.div`
  cursor: pointer;
  color: rgb(240, 244, 255);

  &:hover {
    color: rgb(153, 138, 190);

    transition: var(--trans, color 0.4s ease 0s);
  }
`;

const Menu2 = styled.div`
  cursor: pointer;
  color: rgb(240, 244, 255);

  &:hover {
    color: rgb(153, 138, 190);
    transition: var(--trans, color 0.4s ease 0s);
  }
`;

const Menu3 = styled.div`
  cursor: pointer;
  color: rgb(240, 244, 255);

  &:hover {
    color: rgb(153, 138, 190);
    transition: var(--trans, color 0.4s ease 0s);
  }
`;

const MobileMenuHamburgerWrap = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 10;
`;

const Hamburger = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${({ isOpen }) => (isOpen ? "transparent" : "white")};
  transition: all 0.3s ease-in-out;
  position: relative;

  &::before,
  &::after {
    content: "";
    width: 30px;
    height: 3px;
    background-color: white;
    position: absolute;
    left: 0;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    top: ${({ isOpen }) => (isOpen ? "0" : "-8px")};
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
  }

  &::after {
    top: ${({ isOpen }) => (isOpen ? "0" : "8px")};
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

const MenuOverlay = styled.div`
  position: fixed;
  top: 76px;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  background-color: black;
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  opacity: 0.9;
`;

const MenuItem = styled.a`
  color: white;
  font-size: 24px;
  margin: 20px 0;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #999;
  }
`;


const MenuItemWrapper = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
`;

const CloseIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: transparent; // Set to transparent so only the "X" is visible
  position: relative;
  z-index: 9999;
  margin-top: -60px; // Adjust this to position the icon correctly

  &::before,
  &::after {
    content: "";
    width: 30px;
    height: 3px;
    background-color: white;
    position: absolute;
    left: 0;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    top: 0;
    transform: rotate(45deg);
  }

  &::after {
    top: 0;
    transform: rotate(-45deg);
  }
`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <HeaderWrap>
        <SubWrap>
          <ProfileNameLogoWrap>
            <ProfileLogo src="https://static.wixstatic.com/media/c837a6_0ee54e642d664599a16d94d57726cce4~mv2.png/v1/fill/w_88,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/illustrator_final_logo-01.png"></ProfileLogo>
            <ProfileName>Chandan Babu</ProfileName>
          </ProfileNameLogoWrap>
          <MenuWrap>
            <Menu1>Work</Menu1>
            <Menu2>About</Menu2>
            <Menu3>Profile Links</Menu3>
          </MenuWrap>

          <MobileMenuHamburgerWrap>
            <MenuContainer onClick={toggleMenu}>
              {isOpen ? <CloseIcon /> : <Hamburger />}
            </MenuContainer>

            <MenuOverlay isOpen={isOpen}>
              <MenuItemWrapper>
                <MenuItem href="#work">Work</MenuItem>
                <MenuItem href="#about">About</MenuItem>
                <MenuItem href="#instagram">Profile Links</MenuItem>
              </MenuItemWrapper>
            </MenuOverlay>
          </MobileMenuHamburgerWrap>
        </SubWrap>
      </HeaderWrap>
    </>
  );
};
