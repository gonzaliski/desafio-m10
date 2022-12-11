import styled from "styled-components";
import { InstagramIcon, TwitterIcon } from "ui/icons";
import { TinyText, LargeTextThin } from "ui/texts";
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <ContentBox>
          <TinyText>Ingresar</TinyText>
          <TinyText>Mi perfil</TinyText>
          <TinyText>Buscar</TinyText>
          <TinyText>Logout</TinyText>
        </ContentBox>
        <ContentBox>
          <LargeTextThin>Redes</LargeTextThin>
          <SocialLink>
            <TwitterIcon></TwitterIcon>
            <TinyText>My Ecommerce</TinyText>
          </SocialLink>
          <SocialLink>
            <InstagramIcon></InstagramIcon>
            <TinyText>My Ecommerce</TinyText>
          </SocialLink>
        </ContentBox>
      </FooterContentContainer>
      <TinyText>©2022 apx</TinyText>
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
