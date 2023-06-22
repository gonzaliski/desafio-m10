import styled from "styled-components";
import { LgTextBold, MainLink } from "ui/texts";

export const DesktopOnly = styled.div`
  .icon {
    cursor: pointer;
    font-size: x-large;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MobileOnly = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavBarBox = styled.nav`
  width: 100vw;
  color: white;
  background-color: var(--primary-color);
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .navbar__items {
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 960px) {
    .navbar__items {
      justify-content: center;
    }
  }
  @media (min-width: 920px) {
    padding: 15px 30px 15px 30px;
  }
`;

export const NavBarLinks = styled.ul<NavBarLinksProps>`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  position: fixed;
  margin: 0;
  height: 100vh;
  padding-top: 20%;
  right: ${({ active }) => (active ? "0%" : "-100%")};
  background-color: var(--primary-color);
  top: 0;
  width: 75%;
  z-index: 5000;
  transition: all 0.4s linear;
  box-shadow: 1px 10px 60px 3px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 1px 10px 60px 3px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 1px 10px 60px 3px rgba(0, 0, 0, 0.59);
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 10px;
    font-size: 18px;
    cursor: pointer;
  }
  li:hover {
    color: var(--secondary-color);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const SessionInfoContainer = styled.div`
  display: flex;
  cursor: pointer;
  .user-info {
    display: flex;
    align-items: center;
    gap: 10px;
    .icon {
      display: none;
    }
    @media (min-width: 768px) {
      .icon {
        display: inline;
      }
    }
  }
`;
export const LogOutLink = styled(MainLink)`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const UsernameText = styled(LgTextBold)`
  display: none;
  @media (min-width: 768px) {
    display: inline;
    font-size: 15px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;
