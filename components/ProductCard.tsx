import styled from "styled-components";
import Image from "next/image";
import { BodyText, LargeTextThin, Subtitle } from "ui/texts";
import { TertiaryButton } from "ui/buttons";
import Watch from "/public/watch.jpg";
export const ProductCard = () => {
  return (
    <CardContainer>
      <Image src={Watch} alt={"reloj"} height={100}></Image>
      <div className="product__info-container">
        <Subtitle>
          Waterproof Sport Smart Watch Monitor for IOS and Android
        </Subtitle>
        <BodyText>This smart watch has the best technology</BodyText>
      </div>
      <LargeTextThin>$100</LargeTextThin>
      <TertiaryButton>Ver detalle</TertiaryButton>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  gap: 15px;
  padding: 0px 15px 15px 15px;
  max-height: 380px;
  max-width: 280px;
  border-radius: 10px;
  background-color: white;
`;
