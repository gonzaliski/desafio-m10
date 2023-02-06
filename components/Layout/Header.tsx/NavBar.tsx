import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { HorizontalBox } from "ui/boxes";
import { LargeTextBold, LightSubtitle } from "ui/texts";
import { SearchBar } from "./SearchBar";
export const NavBar = () => {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);
  const handleClick = (state: boolean) => {
    setShowContent(state);
  };
  return (
    <NavBarBox>
      <HorizontalBox>
        <LightSubtitle onClick={() => router.push("/")}>
          Ecommerce
        </LightSubtitle>
        <BurgerMenu onOpen={handleClick} />
      </HorizontalBox>
      {router.pathname !== "/" && <SearchBar />}
      <NavBarLinks active={showContent}>
        <li>
          <Link href={"/ingresar"} passHref legacyBehavior>
            <LargeTextBold>Ingresar</LargeTextBold>
          </Link>
        </li>
        <li>
          <Link href={"/perfil"} passHref legacyBehavior>
            <LargeTextBold>Mi perfil</LargeTextBold>
          </Link>
        </li>
        <li>
          <Link href={"/"} passHref legacyBehavior>
            <LargeTextBold>Buscar</LargeTextBold>
          </Link>
        </li>
      </NavBarLinks>
    </NavBarBox>
  );
};

const NavBarBox = styled.nav`
  width: 100vw;
  color: white;
  background-color: var(--primary-color);
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const NavBarLinks = styled.ul<NavBarLinksProps>`
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
  width: 50%;
  z-index: 1;
  transition: all 0.4s linear;
  box-shadow: 1px 10px 60px 3px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 1px 10px 60px 3px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 1px 10px 60px 3px rgba(0, 0, 0, 0.59);
  li {
    padding: 20px 10px;
    font-size: 18px;
    cursor: pointer;
  }
  li:hover {
    color: var(--secondary-color);
  }
`;

const BurgerMenu = ({ onOpen }: any) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    onOpen(!open);
  };

  return (
    <BurgerMenuContainer open={open} onClick={handleClick}>
      <div />
      <div />
      <div />
    </BurgerMenuContainer>
  );
};

const BurgerMenuContainer = styled.div<BurgerMenuContainerProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  div {
    background-color: white;
    margin-bottom: 4px;
    width: 2rem;
    height: 4px;
    border-radius: 10px;
    transform-origin: 0.25rem;
    transition: all 0.3s linear;
    z-index: 20;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-44deg)" : "rotate(0)")};
    }
  }
`;
