import { logout } from "lib";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import { InstagramIcon, TwitterIcon } from "ui/icons";
import { LargeTextThin, TinyText } from "ui/texts";
export const Footer = () => {
  const handleLogout = () => {
    logout();
    Router.push("/");
  };
  let actualYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterContentContainer>
        <ContentBox>
          <LargeTextThin>Atajos</LargeTextThin>
          <Link href={"/ingresar"} passHref legacyBehavior>
            <TinyText>Ingresar</TinyText>
          </Link>
          <Link href={"/perfil"} passHref legacyBehavior>
            <TinyText>Mi perfil</TinyText>
          </Link>
          <Link href={"/"} passHref legacyBehavior>
            <TinyText>Buscar</TinyText>
          </Link>
          <TinyText onClick={handleLogout}>Logout</TinyText>
        </ContentBox>
        <ContentBox>
          <LargeTextThin>Redes</LargeTextThin>
          <SocialLink>
            <TwitterIcon></TwitterIcon>
            <Link href={"https://www.twitter.com"} passHref legacyBehavior>
              <TinyText>Gonzalo Méndez Stefano</TinyText>
            </Link>
          </SocialLink>
          <SocialLink>
            <InstagramIcon></InstagramIcon>
            <Link href={"https://www.instagram.com"} passHref legacyBehavior>
              <TinyText>Gonzalo Méndez Stefano</TinyText>
            </Link>
          </SocialLink>
        </ContentBox>
        <TinyText>@{actualYear} apx</TinyText>
      </FooterContentContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--black-main);
  padding: 60px 20px 20px 20px;
  color: white;
  position: relative;
  bottom: 0;
`;

const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
  padding-bottom: 150px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SocialLink = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
