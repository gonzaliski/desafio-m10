import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { MainButton, TertiaryButton } from "ui/buttons";
import { BodyText, LargeTextThin, Subtitle } from "ui/texts";
import Watch from "/public/watch.jpg";
export const ProductCard = ({
  id,
  title,
  desc,
  price,
  purchasable,
}: ProductCardProps) => {
  const router = useRouter();
  return (
    <CardContainer purchasable={purchasable}>
      <Image src={Watch} alt={"reloj"} height={purchasable ? 200 : 100}></Image>
      <Subtitle>{title}</Subtitle>
      <LargeTextThin>${price}</LargeTextThin>
      {!purchasable && (
        <TertiaryButton onClick={() => router.push("/item/" + id)}>
          Ver detalle
        </TertiaryButton>
      )}
      {purchasable && <MainButton>Comprar</MainButton>}
      {purchasable && <BodyText>{desc}</BodyText>}
    </CardContainer>
  );
};

interface CardContainerProps {
  purchasable?: boolean;
}

const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  gap: 15px;
  padding: 0px 15px 15px 15px;
  max-height: ${({ purchasable }) => (purchasable ? "90%" : "380px")};
  max-width: ${({ purchasable }) => (purchasable ? "70%" : "280px")};
  height: 100%;
  border-radius: 10px;
  background-color: white;
`;
