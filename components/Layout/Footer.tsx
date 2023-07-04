import { logout } from "lib";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import { InstagramIcon, TwitterIcon } from "ui/icons";
import { LgTextBold, LgTextThin, TinyMdText } from "ui/texts";
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
          <LgTextBold>Atajos</LgTextBold>
          <Link href={"/ingresar"} passHref legacyBehavior>
            <TinyMdText className="link">Ingresar</TinyMdText>
          </Link>
          <Link href={"/perfil"} passHref legacyBehavior>
            <TinyMdText className="link">Mi perfil</TinyMdText>
          </Link>
          <Link href={"/"} passHref legacyBehavior>
            <TinyMdText className="link">Buscar</TinyMdText>
          </Link>
          <TinyMdText onClick={handleLogout} className="link">
            Logout
          </TinyMdText>
        </ContentBox>
        <ContentBox>
          <LgTextBold>Redes</LgTextBold>
          <SocialLink>
            <TwitterIcon></TwitterIcon>
            <Link href={"https://www.twitter.com"} passHref legacyBehavior>
              <TinyMdText>Gonzalo Méndez Stefano</TinyMdText>
            </Link>
          </SocialLink>
          <SocialLink>
            <InstagramIcon></InstagramIcon>
            <Link href={"https://www.instagram.com"} passHref legacyBehavior>
              <TinyMdText>Gonzalo Méndez Stefano</TinyMdText>
            </Link>
          </SocialLink>
        </ContentBox>
        <TinyMdText>@{actualYear} apx</TinyMdText>
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
  .link {
    cursor: pointer;
  }
`;

const SocialLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
