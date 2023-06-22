import { getUsername, isUserLogged, logout } from "lib";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import {
  BsCart,
  BsHeart,
  BsPerson,
  BsPersonFill,
  BsSearch,
} from "react-icons/bs";
import { HorizontalBox } from "ui/boxes";
import { ShoppingCart } from "ui/icons";
import { LgTextBold, LightSubtitle } from "ui/texts";
import { SearchBar } from "../SearchBar";
import { BurgerMenu } from "./BurgerMenu";
import {
  DesktopOnly,
  LogOutLink,
  MobileOnly,
  NavBarBox,
  NavBarLinks,
  SessionInfoContainer,
  UsernameText,
} from "./styles";
export const NavBar = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const handleClick = (state: boolean) => {
    setShowContent(state);
  };
  useEffect(() => {
    setUserLoggedIn(isUserLogged());
  }, []);
  return (
    <NavBarBox>
      <HorizontalBox className="navbar__items" gap={"20px"}>
        <HorizontalBox gap={"10px"}>
          <ShoppingCart />
          <Link href={"/"} passHref legacyBehavior>
            <LightSubtitle style={{ cursor: "pointer" }}>
              indigoAR
            </LightSubtitle>
          </Link>
        </HorizontalBox>
        <BurgerMenu onOpen={handleClick} />
        <DesktopOnly style={{ width: "60%" }}>
          <SearchBar />
        </DesktopOnly>
        <DesktopOnly>
          <HorizontalBox align="center" gap="10px">
            {userLoggedIn ? (
              <SessionInfo handleLogout={setUserLoggedIn} />
            ) : (
              <Link href={"/ingresar"} passHref legacyBehavior>
                <BsPerson className="icon"></BsPerson>
              </Link>
            )}
            <Link href={"/carrito"} passHref legacyBehavior>
              <BsCart className="icon"></BsCart>
            </Link>
            <Link href={"/carrito"} passHref legacyBehavior>
              <BsHeart className="icon"></BsHeart>
            </Link>
          </HorizontalBox>
        </DesktopOnly>
      </HorizontalBox>
      <MobileOnly>
        <SearchBar />
      </MobileOnly>
      <NavLinks
        showContent={showContent}
        userLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
      />
    </NavBarBox>
  );
};

const NavLinks = ({
  showContent,
  userLoggedIn,
  setUserLoggedIn,
}: {
  showContent: boolean;
  userLoggedIn: boolean;
  setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const linksData = [
    {
      icon: <BsPersonFill className="icon"></BsPersonFill>,
      path: "/perfil",
      text: "Mi perfil",
    },
    {
      icon: <BsHeart className="icon"></BsHeart>,
      path: "/favourites",
      text: "Mis Favoritos",
    },
    {
      icon: <BsCart className="icon"></BsCart>,
      path: "/cart",
      text: "Mi Carrito",
    },
    {
      icon: <BsSearch className="icon"></BsSearch>,
      path: "/",
      text: "Buscar",
    },
  ];
  return (
    <NavBarLinks active={showContent}>
      {linksData.map((link) => (
        <li>
          {link.icon}
          <Link href={link.path} passHref legacyBehavior>
            <LgTextBold>{link.text}</LgTextBold>
          </Link>
        </li>
      ))}
      <li>
        {userLoggedIn ? (
          <SessionInfo handleLogout={setUserLoggedIn} />
        ) : (
          <Link href={"/ingresar"} passHref legacyBehavior>
            <LgTextBold>Ingresar</LgTextBold>
          </Link>
        )}
      </li>
    </NavBarLinks>
  );
};

const SessionInfo = ({ handleLogout }: SessionInfoProps) => {
  const [username, setUsername] = useState();
  const handleClick = () => {
    logout();
    handleLogout(false);
    Router.push("/");
    alert("Sesion cerrada");
  };
  useEffect(() => {
    if (isUserLogged() && getUsername()) setUsername(getUsername());
  }, []);
  return (
    <SessionInfoContainer>
      <div className="user-info" onClick={() => Router.push("/perfil")}>
        <BsPersonFill className={"icon"}></BsPersonFill>
        <UsernameText>{username}</UsernameText>
      </div>
      <LogOutLink onClick={handleClick}>Cerrar sesión</LogOutLink>
    </SessionInfoContainer>
  );
};
